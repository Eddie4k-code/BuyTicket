import { Message } from "node-nats-streaming";
import { expirationQueue } from "../../queues/expiration-queue";
import { OrderCreatedEvent } from "../order-created-event";
import { Subjects } from "../subjects/subjects";
import { Listener } from "./base-listener";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
    queueGroupName: string = 'expiration-service'
 
    readonly subject = Subjects.OrderCreated;

    //We have to create a new job an queue it up.
    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
        const delay = new Date(data.expiresAt).getTime();

        console.log('Waiting this many milliseconds to process the job.', delay);

        //Add Order to Expiration Queue After Delay.

        await expirationQueue.add({
            orderId: data.id
        },

        {
            delay: delay,
        }

        );

        msg.ack();
    }

    



}