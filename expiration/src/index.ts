import { OrderCreatedListener } from "./events/listeners/order-created-listener";
import { natsWrapper } from "./nats-wrapper";







//Start DB and connect to our nats client
const start = async () => {
   

    await natsWrapper.connect('ticketing', '123456', 'http://nats-srv:4222');

    natsWrapper.client.on('close', () => {
        console.log('NATS Connection closed!');
    });

    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());

    new OrderCreatedListener(natsWrapper.client).listen();

}





start();
