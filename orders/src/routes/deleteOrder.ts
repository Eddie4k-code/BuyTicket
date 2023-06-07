import express, { Request, Response } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { NotFoundError } from '../errors/not-found-error';
import { OrderCancelledPublisher } from '../events/publishers/order-cancelled-publisher';
import { currentUser } from '../middlewares/current-user';
import { requireAuth } from '../middlewares/require-auth';
import { Order, OrderStatus } from '../models/order';
import { natsWrapper } from '../nats-wrapper';



//Cancels an order by updating the orders status to cancelled.

const router = express.Router();



router.delete('/api/orders/:orderId', currentUser, requireAuth, async (req: Request, res: Response) => {

    try {

        const orderId = req.params.orderId;

        const order = await Order.findById(orderId).populate('ticket');

        if (!order) {
            throw new NotFoundError();
        }

        if (order.userId !== req.currentUser!.id) {
            throw new NotAuthorizedError();
        }

        order.status = OrderStatus.Cancelled;
        await order.save();



        //Publish event to delete order
        new OrderCancelledPublisher(natsWrapper.client).publish({
            id: order.id,
            version: order.version,
            ticket: {
                id: order.ticket.id,
            },
        });
        


    } catch (err:any) {

    }
});


export { router as deleteOrderRouter };