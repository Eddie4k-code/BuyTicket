import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';

/*
    
    after currentUser middleware checks for JWT, this Checks if currentUser is defined.

 */

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {


    try {

        if (!req.currentUser) {
            throw new NotAuthorizedError();
        }

        //req.currentUser exists, we move on

        next();

    } catch (err: any) {

        if (err instanceof CustomError) {
            return res.status(err.statusCode).json({ errors: err.serializeErrors() });
        }

    }
    

}