import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { CustomError } from '../errors/custom-error';
import { RequestValidationError } from '../errors/request-validation-error';
import { User } from '../models/user';
import { Password } from '../services/password';
import jwt from 'jsonwebtoken';

const router = express.Router();



/*
 
    Signs a User In (express-validator used to verify inputs)

 */


router.post('/api/users/signin',
    [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),

        body('password')
            .trim()
            .notEmpty()
            .withMessage('You must apply a password.')
    ],
    async (req: Request, res: Response) => {

        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                throw new RequestValidationError(errors.array());
            }

            const { email, password } = req.body;

            const existingUser = await User.findOne({ email });


            if (!existingUser) {
                throw new BadRequestError('Invalid Credentials');
            }

            const isMatch = await Password.compare(existingUser.password, password);

            if (!isMatch) {
                throw new BadRequestError('Invalid Credentials');
            }

            //Generate JSONWebToken

            const userJwt = jwt.sign({ id: existingUser._id, email: existingUser.email }, process.env.JWT_KEY!);

            //Store it in session
            req.session = {
                jwt: userJwt
            }

            res.status(200).send(existingUser);


        } catch (err: any) {

            if (err instanceof CustomError) {
                return res.status(err.statusCode).send({ errors: err.serializeErrors() });
            }


            //If we dont understand the error that came in
            return res.status(400).send({ errors: [{ message: 'Something went Wrong!' }] });
        }

});


export { router as signinRouter };