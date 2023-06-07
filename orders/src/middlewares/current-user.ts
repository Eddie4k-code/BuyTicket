import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

//Defining what the jwt payload will look like.
interface UserPayload {
    id: string,
    email: string
}

//Telling TS that inside the Express Object Find the interfacve request and add this additional property "currentUser" that may be defined, if it is it will be type UserPayload
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}




/*
 
    Checks for a req.session and for a jsonwebtoken, if theres a verified JWT Token then currentUser is set.

 */

export const currentUser = (req: Request, res: Response, next: NextFunction) => {

    if (!req.session?.jwt) {
        return next();
    }


    try {

        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;

        req.currentUser = payload;

    } catch (err) { }

    next();

}