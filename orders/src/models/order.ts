import mongoose from 'mongoose';
import { TicketDoc } from './ticket';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';


//Defines definitions for all status levels of an order.
export enum OrderStatus {

    //When the ordder has been created
    //But the ticket that is being ordered has not been reserved yet.
    Created = 'created',

    //The ticket the order is trying to reserve has been reserved or the user has cancelled the order
    //Or the order expires before a payment was made.
    Cancelled = 'cancelled',

    //The order has reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    //The order reserved the ticket and payment was provided.
    Complete = 'complete'
}


//Properties that are required to build a new order
interface OrderAttrs {
    userId: string;
    status: OrderStatus;
    expiresAt: Date;
    ticket: TicketDoc;
}


//Properties that a order has
interface OrderDoc extends mongoose.Document {
    userId: string;
    status: OrderStatus;
    expiresAt: Date;
    ticket: TicketDoc;
    version: number;
}

//Additional static methods that are tied to the model
interface OrderModel extends mongoose.Model<OrderDoc> {
    build(attrs: OrderAttrs): OrderDoc; //Define Build method
}


const orderSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true,
        enum: Object.values(OrderStatus)
    },

    expiresAt: {
        type: mongoose.Schema.Types.Date,
        required: false
    },

    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    }



}, {

    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }

});


orderSchema.set('versionKey', 'version');
orderSchema.plugin(updateIfCurrentPlugin);


orderSchema.statics.build = (attrs: OrderAttrs) => {

    return new Order(attrs);

}

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);


export { Order }