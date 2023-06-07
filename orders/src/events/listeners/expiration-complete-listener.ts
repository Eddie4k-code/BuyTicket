import { Message } from "node-nats-streaming";
import { Order, OrderStatus } from "../../models/order";
import { natsWrapper } from "../../nats-wrapper";
import { ExpirationCompleteEvent } from "../expiration-complete-event";
import { OrderCancelledPublisher } from "../publishers/order-cancelled-publisher";
import { Subjects } from "../subjects/subjects";
import { Listener } from "./base-listener";

export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
    queueGroupName = 'orders-service';

    //Functionality to "Remove" the Order
    async onMessage(data: ExpirationCompleteEvent['data'], msg: Message) {
        const order = await Order.findById(data.orderId).populate('ticket');

        //No Order Found
        if (!order) {
            throw new Error('Order not found!');
        }

        //Check if Order is complete / already paid for.
        if (order.status === OrderStatus.Complete) {
            console.log('Order is already fulfilled!');
            return msg.ack();
        }

        //Cancel Order 
        order.set({
            status: OrderStatus.Cancelled
        });

        await order.save();

        //Inform our other services that an order has been cancelled.

        new OrderCancelledPublisher(natsWrapper.client).publish({
            id: order.id,
            version: order.version,
            ticket: {
                id: order.ticket.id
            }
        });

        msg.ack();
        





    }



}