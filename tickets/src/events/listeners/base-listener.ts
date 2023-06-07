import { Message, Stan } from "node-nats-streaming";
import { Subjects } from "../subjects/subjects";


//Describes a Generic Event
interface Event {
    subject: Subjects;
    data: any;
}

//The BluePrint for Any Listener subclass
export abstract class Listener<T extends Event> {
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    abstract onMessage(data: T['data'], msg: Message): void;
    protected client: Stan;

    protected ackWait = 5 * 1000;

    constructor(client: Stan) {
        this.client = client;
    }

    subscriptionOptions() {
        return this.client.subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName)
    }

    listen() {

        const subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());

        subscription.on('message', (msg: Message) => {

            console.log(`Message Recieved ${this.subject} / ${this.queueGroupName}`);

            const parsedData = this.parseMessage(msg); //Parse the data / message

            this.onMessage(parsedData, msg);

        });

    }
    //Parses the data and returns it
    parseMessage(msg: Message) {
        const data = msg.getData();

        return typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf8'))
    }
}
