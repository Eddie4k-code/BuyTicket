import { Subjects } from "../subjects/subjects";
import { Listener } from "./base-listener";
import { PaymentCreatedEvent } from '../payment-created-event';
import { Message } from "node-nats-streaming";
import { Order, OrderStatus } from "../../models/order";

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
   

    queueGroupName = 'orders-service';
    readonly subject = Subjects.PaymentCreated;

    //Functionality To Mark an Order as Paid/Complete
    async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {
        const order = await Order.findById(data.orderId);

        if (!order) {
            throw new Error('Order not found');
        }


        order.set({
            status: OrderStatus.Complete
        });

        await order.save();

        msg.ack();


    }

}