import mongoose from "mongoose";



//Properties that need to be provided to a payment.
interface PaymentAttrs {
    orderId: string;
    stripeId: string;
}

//List of props a Payment has
interface PaymentDoc extends mongoose.Document {
    orderId: string;
    stripeId: string;
}


//Methods Associated with Payment Model.
interface PaymentModel extends mongoose.Model<PaymentDoc> {
    build(attrs: PaymentAttrs): PaymentDoc // Returns Payment Document.
}

const paymentSchema = new mongoose.Schema({
    orderId: {
        required: true,
        type: String
    },

    stripeId: {
        required: true,
        type: String
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
}

);

paymentSchema.statics.build = (attrs: PaymentAttrs) => {
    return new Payment(attrs);
};

const Payment = mongoose.model<PaymentDoc, PaymentModel>('Payment', paymentSchema);

export { Payment };