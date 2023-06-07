import { ExpirationCompleteEvent } from "../expiration-complete-event";
import { Subjects } from "../subjects/subjects";
import { Publisher } from "./base-publisher";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {

    readonly subject = Subjects.ExpirationComplete;


}