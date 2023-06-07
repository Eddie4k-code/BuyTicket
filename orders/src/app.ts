import express, { NextFunction, Request, Response } from 'express';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import 'express-async-errors';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import { newOrderRouter } from './routes/newOrder';
import { getOrderRouter } from './routes/getOrder';
import { deleteOrderRouter } from './routes/deleteOrder';
import { showOrderRouter } from './routes/showOrder';


/* Configures out Express Application. */




const app = express();
app.set('trust proxy', true); //need it to trust proxies from ingress-nginx
app.use(express.json());
app.use(cookieSession({
    signed: false,
    secure: true,
}));


//Routes

//Delete
app.use(deleteOrderRouter);

//Get 
app.use(getOrderRouter);

//Show
app.use(showOrderRouter);

// New 
app.use(newOrderRouter);



//Invalid Route
app.get('*', async (req: Request, res: Response, next: NextFunction) => {
    throw new NotFoundError();
})

export { app };
