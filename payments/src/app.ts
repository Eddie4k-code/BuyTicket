import express, { NextFunction, Request, Response } from 'express';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import 'express-async-errors';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import { createPaymentRouter } from './routes/newPayment';

/* Configures out Express Application. */




const app = express();
app.set('trust proxy', true); //need it to trust proxies from ingress-nginx
app.use(express.json());
app.use(cookieSession({
    signed: false,
    secure: true,
}));



//Create new Payment Route
app.use(createPaymentRouter);


//Invalid Route
app.get('*', async (req: Request, res: Response, next: NextFunction) => {
    throw new NotFoundError();
})

export { app };
