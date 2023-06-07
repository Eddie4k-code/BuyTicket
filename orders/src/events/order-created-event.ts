import { OrderStatus } from "../models/order";
import { Subjects } from "./subjects/subjects";
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


