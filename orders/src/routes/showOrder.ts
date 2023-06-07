import express, { Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { NotFoundError } from '../errors/not-found-error';
import { currentUser } from '../middlewares/current-user';
import { requireAuth } from '../middlewares/require-auth';
import { Order } from '../models/order';


//Retireves information of a specific order.

const router = express.Router();


router.get('/api/orders/:orderId', currentUser, requireAuth, async (req: Request, res: Response) => {

    try {

        const orderId = req.params.orderId;

        const order = await Order.findById(orderId).populate('ticket');

        if (!order) {
            throw new NotFoundError();
        }

        if (order.userId !== req.currentUser!.id) {
            throw new NotAuthorizedError();
        }



        res.status(200).send(order);

    } catch (err:any) {
        if (err instanceof CustomError) {
            return res.status(err.statusCode).send({ errors: err.serializeErrors() });
        }


        return res.status(400).send({ errors: [{ message: 'Something went Wrong!' }] });
    }
});


export { router as showOrderRouter };