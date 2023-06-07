import mongoose from "mongoose";

import { app } from "./app";
import { OrderCancelledListener } from "./events/listeners/order-cancelled-listener";
import { OrderCreatedListener } from "./events/listeners/order-created-listener";
import { natsWrapper } from "./nats-wrapper";

/* Starts the Express Application and Mongo Database */



//Create Express App
app.listen(3000, () => {
    console.log('Running on port 3000!');
});

//Start DB and connect to our nats client
const startDB = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY Must be Defined!');
    }

    await natsWrapper.connect('ticketing', 'laskjf', 'http://nats-srv:4222');

    natsWrapper.client.on('close', () => {
        console.log('NATS Connection closed!');
    });

    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());


    //All Listeners here
    new OrderCreatedListener(natsWrapper.client).listen();
    new OrderCancelledListener(natsWrapper.client).listen();


    await mongoose.connect('mongodb://tickets-mongo-srv:27017/tickets', { serverSelectionTimeoutMS: 50000 }).then(() => console.log('Connected to DB')).catch(err => console.log(err));
}





startDB();
