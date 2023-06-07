import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { CustomError } from '../errors/custom-error';
import { RequestValidationError } from '../errors/request-validation-error';
import { errorHandler } from '../middlewares/error-handler';
import { User } from '../models/user';
const router = express.Router();
import jwt from 'jsonwebtoken';





/* 
  
    Signs a User Up (express-validator used to verify inputs) 
 
 */



router.post('/api/users/signup', [body('email').isEmail().withMessage('Email must be valid'), body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 and 20 characters')],

    async (req: Request, res: Response) => {

        try {

            const errors = validationResult(req);

            //Check if errors exist.
            if (!errors.isEmpty()) {
                throw new RequestValidationError(errors.array());
            }


            const { email, password } = req.body;

            const existingUser = await User.findOne({ email });

            if (existingUser) {
                throw new BadRequestError('User Already Exists!');
            }


            const user = User.build({ email, password });
            await user.save();

            //Generate JSONWebToken

            const userJwt = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_KEY!);

            //Store it in session
            req.session = {
                jwt: userJwt
            }

            res.status(201).send(user);




        } catch (err: any) {

            if (err instanceof CustomError) {
                return res.status(err.statusCode).send({ errors: err.serializeErrors() });
            }
            
            console.log(err);

            //If we dont understand the error that came in
            return res.status(400).send({ errors: [{ message: 'Something went Wrong!' }]});
            }
    });

//Testing purposes making sure serivce is working.
router.get('/api/users/get', (req: Request, res: Response) => {

    res.send('Hey');

});


export { router as signupRouter };