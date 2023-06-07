import express, { Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { NotFoundError } from '../errors/not-found-error';
import { RequestValidationError } from '../errors/request-validation-error';
import { currentUser } from '../middlewares/current-user';
import { requireAuth } from '../middlewares/require-auth';
import { Ticket } from '../models/ticket';
import { body, validationResult } from 'express-validator';
import { TicketUpdatedPublisher } from '../events/publishers/ticket-updated-publisher';

import { BadRequestError } from '../errors/bad-request-error';
import { natsWrapper } from '../nats-wrapper';

//Route for updating an existing ticket

const router = express.Router();

router.put('/api/tickets/:id', currentUser, requireAuth,
    [
        body('title')
            .not()
            .isEmpty()
            .withMessage('Title is Required'),
        body('price')
            .isFloat({ gt: 0 })
            .withMessage('Price Must be Provided and Greater than Zero.')
    ],
    async (req: Request, res: Response) => {

        try {
            const ticket = await Ticket.findById(req.params.id);

            if (!ticket) {
                throw new NotFoundError();
            }

            if (ticket.userId != req.currentUser!.id) {
                throw new NotAuthorizedError();
            }

            //Check If Ticket is Reserved
            if (ticket.orderId) {
                throw new BadRequestError('Ticket is Reserved, cannot edit.');
            }

            const savedTicket = ticket.set({
                title: req.body.title,
                price: req.body.price
            });

            await savedTicket.save();

            // after we save to db we must publish it
            await new TicketUpdatedPublisher(natsWrapper.client).publish({
                id: savedTicket.id,
                title: savedTicket.title,
                price: savedTicket.price,
                userId: savedTicket.userId,
                version: savedTicket.version
            });

        return res.status(200).json(savedTicket);

    } catch (err: any) {
        console.log(err);

        if (err instanceof CustomError) {
            return res.status(err.statusCode).send({ errors: err.serializeErrors() });
        }


        return res.status(400).send({ errors: [{ message: 'Something went Wrong!' }] });
    }

});


export { router as updateTicketRouter }