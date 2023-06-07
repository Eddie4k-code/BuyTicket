import { Subjects } from "./subjects/subjects";




//Defines Shape of data for the Ticket Created Event
export interface TicketCreatedEvent {
    subject: Subjects.TicketCreated;

    data: {
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;
    }
}