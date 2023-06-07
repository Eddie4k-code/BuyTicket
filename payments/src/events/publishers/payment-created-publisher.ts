import { Subjects } from "../subjects/subjects";
import { Publisher } from "./base-publisher";
import { PaymentCreatedEvent } from '../payment-created-event';

//Publisher for Payment Created Event

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}