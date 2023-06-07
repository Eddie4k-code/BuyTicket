
import { Subjects } from "./subjects/subjects";

//Defines definitions for all status levels of an order.
export enum OrderStatus {

    //When the ordder has been created
    //But the ticket that is being ordered has not been reserved yet.
    Created = 'created',

    //The ticket the order is trying to reserve has been reserved or the user has cancelled the order
    //Or the order expires before a payment was made.
    Cancelled = 'cancelled',

    //The order has reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    //The order reserved the ticket and payment was provided.
    Complete = 'complete'
}




//Defines Shape of data for the Order Created Event
export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated;

    data: {
        id: string,
        version: number,
        status: OrderStatus,
        userId: string,
        expiresAt: string,
        ticket: {
            id: string,
            price: number
        }

    }
}


