

import express, { Request, Response } from 'express';
import { requireAuth } from '../middlewares/require-auth';
import { body } from 'express-validator';
import mongoose from 'mongoose';
import { CustomError } from '../errors/custom-error';
import { Ticket } from '../models/ticket';
import { Order, OrderStatus } from '../models/order';
import { NotFoundError } from '../errors/not-found-error';
import { BadRequestError } from '../errors/bad-request-error';
import { currentUser } from '../middlewares/current-user';
import { OrderCreatedPublisher } from '../events/publishers/order-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

const EXPIRATION_WINDOW_SECONDS = 15 * 60;



router.post('/api/orders', [
    body('ticketId')
        .not()
        .isEmpty()
        .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
        .withMessage('TicketId must be provided!')
        


    ], currentUser, requireAuth,

    async (req: Request, res: Response) => {

        try {
            const { ticketId } = req.body;

        // Find the Ticket the user is trying to order in the database.
            const ticket = await Ticket.findById(ticketId);

            if (!ticket) {
                throw new NotFoundError();
            }

        // Make sure that this ticket is not already reserved
            const isReserved = await ticket.isReserved();

            if (isReserved) {
                throw new BadRequestError('Ticket is already Reserved!');
            }

            


        //Calculate an expiration date for the order.
            const expiration = new Date();
            expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS);

        //Build the order and save it to the database
            const order = Order.build({
                userId: req.currentUser!.id,
                status: OrderStatus.Created,
                expiresAt: expiration,
                ticket: ticket
            });

            await order.save();

        //Publish an event saying that an order was created
            new OrderCreatedPublisher(natsWrapper.client).publish({
                id: order.id,
                version: order.version,
                status: order.status,
                userId: order.userId,
                expiresAt: order.expiresAt.toISOString(),
                ticket: {
                    id: ticket.id,
                    price: ticket.price,
                },
            });
            
            return res.status(201).send(order);

    } catch (err:any) {
            if (err instanceof CustomError) {
                return res.status(err.statusCode).send({ errors: err.serializeErrors() });
            }

            console.log(err);

            return res.status(400).send({ errors: [{ message: 'Something went Wrong!' }] });
    }

});


export { router as newOrderRouter };