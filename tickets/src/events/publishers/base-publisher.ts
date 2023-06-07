
import { Stan } from "node-nats-streaming";
import { Subjects } from "../subjects/subjects";


//Defines Shape of Event
interface Event {
    subject: Subjects;
    data: any;
}


//Blueprint for Publishers
export abstract class Publisher<T extends Event> {

    abstract subject: Subjects;
    protected client: Stan;

    constructor(client:Stan) {
        this.client = client;
    }


   
    publish(data: T['data']): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.publish(this.subject, JSON.stringify(data), (err) => {

                if (err) {
                    return reject(err);
                }

                resolve()
            });
        })


        
    }





}