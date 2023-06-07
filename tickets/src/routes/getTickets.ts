import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';


const router = express.Router();

//Gets all Tickets 

router.get('/api/tickets', async (req: Request, res: Response) => {


    try {

        //Show all tickets that do not have a pending order because they are considered "Reserved"
        const tickets = await Ticket.find({
            orderId: undefined
        });

        return res.status(200).json(tickets);

    } catch (err:any) {
        console.log(err);
        return res.status(400).send({ errors: [{ message: 'Something went Wrong!' }] });
    }


});

export { router as getTicketsRouter };

