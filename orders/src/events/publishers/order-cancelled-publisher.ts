import { OrderCancelledEvent } from '../order-cancelled-event';
import { Subjects } from "../subjects/subjects";
import { Publisher } from "./base-publisher";
//Publisher for cancelling an order.

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}



