import express, { NextFunction, Request, Response } from 'express';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import 'express-async-errors';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/showTicket';
import { getTicketsRouter } from './routes/getTickets';
import { updateTicketRouter } from './routes/updateTicket';

/* Configures out Express Application. */




const app = express();
app.set('trust proxy', true); //need it to trust proxies from ingress-nginx
app.use(express.json());
app.use(cookieSession({
    signed: false,
    secure: true,
}));
//Create Ticket
app.use(createTicketRouter);

//Show Ticket
app.use(showTicketRouter);

//Get all Tickets
app.use(getTicketsRouter);

//Update a Ticket
app.use(updateTicketRouter);


//Invalid Route
app.get('*', async (req: Request, res: Response, next: NextFunction) => {
    throw new NotFoundError();
})

export { app };
