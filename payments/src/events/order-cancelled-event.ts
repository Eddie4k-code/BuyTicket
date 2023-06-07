import { OrderStatus } from "../models/order";
import { Subjects } from "./subjects/subjects";
//Defines Shape of data for the Order Cancelled Event
export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;

    data: {
        id: string;
        version: number;
        ticket: {
            id: string;
        }

    }
}