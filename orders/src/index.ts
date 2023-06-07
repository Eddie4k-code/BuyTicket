import mongoose from "mongoose";
import { app } from "./app";
import { ExpirationCompleteListener } from "./events/listeners/expiration-complete-listener";
import { PaymentCreatedListener } from "./events/listeners/payment-created-listener";
import { TicketCreatedListener } from "./events/listeners/ticket-created-listener";
import { TicketUpdatedListener } from "./events/listeners/ticket-updated-listener";
import { natsWrapper } from "./nats-wrapper";

/* Starts the Express Application and Mongo Database */



//Create Express App
app.listen(3000, () => {
    console.log('Running on port 3000!');
    console.log('Order Service Connected to Server');
   
});

//Start DB and connect to our nats client
const startDB = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY Must be Defined!');
    }

    await natsWrapper.connect('ticketing', 'abcde', 'http://nats-srv:4222');

    natsWrapper.client.on('close', () => {
        console.log('NATS Connection closed!');
    });

    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());

    //All Listeners Here
    new TicketCreatedListener(natsWrapper.client).listen();
    new TicketUpdatedListener(natsWrapper.client).listen();
    new ExpirationCompleteListener(natsWrapper.client).listen();
    new PaymentCreatedListener(natsWrapper.client).listen();

    await mongoose.connect('mongodb://orders-mongo-srv:27017/orders').then(() => console.log('Connected to DB')).catch(err => console.log(err));
}


startDB();
