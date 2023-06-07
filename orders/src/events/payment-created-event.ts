import { Subjects } from "./subjects/subjects";



//Describes the shape of the Payment Created Event

export interface PaymentCreatedEvent {
    subject: Subjects.PaymentCreated;

    data: {
        id: string
        orderId: string,
        stripeId: string
    }
}