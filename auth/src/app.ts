import express, { NextFunction, Request, Response } from 'express';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import 'express-async-errors';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

/* Configures out Express Application. */




const app = express();
app.set('trust proxy', true); //need it to trust proxies from ingress-nginx
app.use(express.json());
app.use(cookieSession({
    signed: false,
    secure: true,
}));



// Middleware for handling errors.
//app.use(errorHandler);

// Route for grabbing the current user
app.use(currentUserRouter);

// Route for signing in a user
app.use(signinRouter);

// Route for signing up a user
app.use(signupRouter);

// Router for signing out a user
app.use(signoutRouter);

//Invalid Route
app.get('*', async (req: Request, res: Response, next: NextFunction) => {
    throw new NotFoundError();
})

export { app };
