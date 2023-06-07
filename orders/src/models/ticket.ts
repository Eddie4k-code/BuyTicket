import mongoose from 'mongoose';
import { BadRequestError } from '../errors/bad-request-error';
import { Order, OrderStatus } from './order';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';


//Properties that are required to build a ticket
interface TicketAttrs {
    id: string;
    title: string;
    price: number;
}

//Properties a ticket has.
export interface TicketDoc extends mongoose.Document {
    title: string;
    price: number;
    version: number;
    isReserved(): Promise<boolean>;
}

//Additional Static methods that Ticket has.
interface TicketModel extends mongoose.Model<TicketDoc> {
    build(attrs: TicketAttrs): TicketDoc;

    //Find ticket by event
    findByEvent(event: {id: string, version: number}): Promise<TicketDoc | null>;
}

const ticketSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            },
        },
    }
);

ticketSchema.set('versionKey', 'version');
ticketSchema.plugin(updateIfCurrentPlugin);

ticketSchema.statics.build = (attrs: TicketAttrs) => {
    return new Ticket({
        _id: attrs.id,
        title: attrs.title,
        price: attrs.price
    });
};

ticketSchema.statics.findByEvent = (event: { id: string, version: number }) => {
    return Ticket.findOne({
        _id: event.id,
        version: event.version - 1
    });
}

ticketSchema.methods.isReserved = async function ():Promise<boolean> {
    //Run query to look at all orders. Find an order where the ticket is the ticket we found above, and the orders status is not cancelled.
    //If an order is found that means the ticket is reserved.
    const existingOrder = await Order.findOne({
        ticket: this, //referring to ticket this method was called on
        status: {
            $in: [
                OrderStatus.Created,
                OrderStatus.AwaitingPayment,
                OrderStatus.Complete
            ]
        }



    });

    return !!existingOrder

    
}

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

export { Ticket };