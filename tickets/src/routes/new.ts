import express, { Request, Response } from 'express';
import { currentUser } from '../middlewares/current-user';
import { requireAuth } from '../middlewares/require-auth';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { CustomError } from '../errors/custom-error';
import { Ticket } from '../models/ticket';
import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher';
import { natsWrapper } from '../nats-wrapper';


//Route for Creating a new Ticket


const router = express.Router();

router.post('/api/tickets', currentUser, requireAuth,
    [
        body('title')
            .not()
            .isEmpty()
            .withMessage('Title is Required!'),

        body('price')
            .isFloat({ gt: 0 })
            .withMessage('Price must be greater than zero')
    ],
    async (req: Request, res: Response) => {

        try {

            const errors = validationResult(req);

            //Check if errors exist
            if (!errors.isEmpty()) {
                throw new RequestValidationError(errors.array());
            }

            const { title, price } = req.body;

            const ticket = Ticket.build({
                title,
                price,
                userId: req.currentUser!.id
            });

            await ticket.save();
            //After ticket is saved in db we must publish it.

            await new TicketCreatedPublisher(natsWrapper.client).publish({
                id: ticket.id,
                title: ticket.title,
                price: ticket.price,
                userId: ticket.userId,
                version: ticket.version

            });

            return res.status(201).json(ticket);



        } catch (err: any) {
            if (err instanceof CustomError) {
                return res.status(err.statusCode).send({ errors: err.serializeErrors() });
            }


            return res.status(400).send({ errors: [{ message: 'Something went Wrong!' }] });
        }


    res.sendStatus(200);

});




export {router as createTicketRouter}