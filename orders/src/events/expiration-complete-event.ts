import { Subjects } from "./subjects/subjects";


//Defines the shape of the ExpirationCompleteEvent.
export interface ExpirationCompleteEvent {
    subject: Subjects.ExpirationComplete;

    data: {
        orderId: string;
    }


}