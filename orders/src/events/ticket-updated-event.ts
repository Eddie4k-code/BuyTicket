import { Subjects } from "./subjects/subjects";



//Defines Shape of data for the Ticket Updated Event
export interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated;

    data: {
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;
        orderId?: string;
    }
}