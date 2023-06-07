import { Subjects } from "../subjects/subjects";
import { Publisher } from "./base-publisher";
import { TicketUpdatedEvent } from '../ticket-updated-event';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;

}







