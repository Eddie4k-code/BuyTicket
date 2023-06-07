import express, { Request, Response } from 'express';
import { errorHandler } from '../middlewares/error-handler';
import jwt from 'jsonwebtoken';
import { currentUser } from '../middlewares/current-user';
import { User } from '../models/user';
import { requireAuth } from '../middlewares/require-auth';
import { CustomError } from '../errors/custom-error';

const router = express.Router();




/*
 
   Sends the currentUser if it exists, otherwise no user will be sent.

 */


router.get('/api/users/currentuser', currentUser, requireAuth, (req: Request, res: Response) => {

        res.send({ currentUser: req.currentUser || null });
    
});



export { router as currentUserRouter };
