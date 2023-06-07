import express, { Request, Response } from 'express';
import { NotFoundError } from '../errors/not-found-error';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {

    try {
        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) {
            throw new NotFoundError();
        }

        return res.status(200).json(ticket);

    } catch (err: any) {
        console.log(err);
        return res.status(400).send({ errors: [{ message: 'Something went Wrong!' }] });
    }

});


export {router as showTicketRouter}