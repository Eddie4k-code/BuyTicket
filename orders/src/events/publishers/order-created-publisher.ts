import { OrderCreatedEvent } from "../order-created-event";
import { Subjects } from "../subjects/subjects";
import { Publisher } from "./base-publisher";

//Publisher for creating an order.

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
    


    

}

