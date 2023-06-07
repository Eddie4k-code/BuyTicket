import mongoose from 'mongoose';
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
    id: string;
    status: OrderStatus;
    version: number;
    userId: string;
    price: number;
}


//Properties that a order has
interface OrderDoc extends mongoose.Document {
    version: number;
    userId: string;
    price: number;
    status: OrderStatus;
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

    price: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    },



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

    return new Order({
        _id: attrs.id,
        version: attrs.version,
        price: attrs.price,
        userId: attrs.userId,
        status: attrs.status
    });

};

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);


export { Order }