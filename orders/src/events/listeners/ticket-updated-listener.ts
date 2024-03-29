import { Message } from "node-nats-streaming";
import { Subjects } from "../subjects/subjects";
import { Listener } from "./base-listener";
import { TicketUpdatedEvent } from '../ticket-updated-event'
import { Ticket } from "../../models/ticket";

//The Ticket Created Listener.

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
    queueGroupName = 'orders-service';

    async onMessage(data: TicketUpdatedEvent['data'], msg: Message) {
        const ticket = await Ticket.findByEvent(data);

        if (!ticket) {
            throw new Error('Ticket not found');
        }

        const { title, price } = data;
        ticket.set({ title, price });
        await ticket.save();

        msg.ack();
    }
}
