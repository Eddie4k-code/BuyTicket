import { Listener } from "./base-listener";
import {OrderCreatedEvent} from '../order-created-event';
import { Subjects } from "../subjects/subjects";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";
import { natsWrapper } from "../../nats-wrapper";


//Listener for creating an order

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
    queueGroupName: string = "tickets-service";
    subject: Subjects.OrderCreated = Subjects.OrderCreated;

    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {

        // Find the Ticket that the order is reserving.
        const ticket = await Ticket.findById(data.ticket.id);

        //If No Ticket, Throw Error
        if (!ticket) {
            throw new Error('Ticket not found!');
        }

        //Mark the ticket as being reserved by setting its orderId property.
        ticket.set({ orderId: data.id });

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

