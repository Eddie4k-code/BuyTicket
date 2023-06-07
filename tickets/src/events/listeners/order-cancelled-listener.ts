import { Listener } from "./base-listener";
import { OrderCancelledEvent } from '../order-cancelled-event';
import { Subjects } from "../subjects/subjects";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";
import { natsWrapper } from "../../nats-wrapper";


//Listener for cancelling an order.

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
    queueGroupName: string = "tickets-service";
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;

    async onMessage(data: OrderCancelledEvent['data'], msg: Message) {

        // Find the Ticket that the order is reserving.
        const ticket = await Ticket.findById(data.ticket.id);

        //If No Ticket, Throw Error
        if (!ticket) {
            throw new Error('Ticket not found!');
        }

        //Remove any orderId from the ticket.
        ticket.set({ orderId: undefined});

        //Save the ticket
        await ticket.save();

        //Publish an event saying that it was just updated
        await new TicketUpdatedPublisher(natsWrapper.client).publish({
            id: ticket.id,
            price: ticket.price,
            title: ticket.title,
            userId: ticket.userId,
            orderId: ticket.orderId,
            version: ticket.version
        });


        // ack the message
        msg.ack();
    }





}

