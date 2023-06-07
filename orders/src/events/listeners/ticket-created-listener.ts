import { Message } from "node-nats-streaming";
import { Subjects } from "../subjects/subjects";
import { Listener } from "./base-listener";
import { TicketCreatedEvent } from '../ticket-created-event'
import { Ticket } from "../../models/ticket";

//The Ticket Created Listener.

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
    queueGroupName = 'orders-service';

    async onMessage(data: TicketCreatedEvent['data'], msg: Message) {
        const { id,title, price } = data;

        const ticket = Ticket.build({
            id,title, price

        });

        await ticket.save();

        msg.ack();
    }

    

}