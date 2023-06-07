import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";
import { OrderCreatedEvent } from "../order-created-event";
import { Subjects } from "../subjects/subjects";
import { Listener } from "./base-listener";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
    queueGroupName = 'payments-service';

    //Functionality to build the order.
    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
        const order = Order.build({
            id: data.id,
            price: data.ticket.price,
            status: data.status,
            userId: data.userId,
            version: data.version
        });

        await order.save();

        msg.ack();
    }
}