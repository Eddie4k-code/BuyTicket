import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { requireAuth} from '../middlewares/require-auth';
import { BadRequestError } from '../errors/bad-request-error';
import { NotFoundError } from '../errors/not-found-error';
import { Order, OrderStatus } from '../models/order';
import { currentUser } from '../middlewares/current-user';
import { body } from 'express-validator';
import { CustomError } from '../errors/custom-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { stripe } from '../stripe/stripe';
import { Payment } from '../models/payments';
import { PaymentCreatedPublisher } from '../events/publishers/payment-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

//Route for Creating a new Payment with Stripe

router.post("/api/payments", currentUser, requireAuth,
    [
        body('token').not().isEmpty(),
        body('orderId').not().isEmpty()
    ],

    
    async (req: Request, res: Response) => {

        try {

            const { token, orderId } = req.body;

            const order = await Order.findById(orderId);

            //Check  if order exists
            if (!order) {
                throw new NotFoundError();
            }

            //Check if user has same id as order user id property
            if (order.userId !== req.currentUser!.id) {
                throw new NotAuthorizedError();
            }

            //Check if order is not cancelled
            if (order.status === OrderStatus.Cancelled) {
                throw new BadRequestError('Cannot Make a Payment for a Cancelled Order.');
            }

            //Setup stripe payment
            const charge = await stripe.charges.create({
                currency: 'usd',
                amount: order.price * 100,
                source: token
            });

            //Create a new instance of payment and save to db
            const payment = await Payment.build({
                orderId: orderId,
                stripeId: charge.id
            });

            await payment.save();

            //Publish that a payment was created to other services.
            new PaymentCreatedPublisher(natsWrapper.client).publish({
                id: payment.id,
                orderId: payment.orderId,
                stripeId: payment.stripeId
            });


            res.status(201).send({ id: payment.id });



        } catch (err: any) {
            if (err instanceof CustomError) {
                return res.status(err.statusCode).send({ errors: err.serializeErrors() });
            }

            console.log(err);

            return res.status(400).send({ errors: [{ message: 'Something went Wrong!' }] });
        }
    
        
    })

export { router as createPaymentRouter };
