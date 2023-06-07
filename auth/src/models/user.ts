import mongoose from 'mongoose';
import { Password } from '../services/password';


//This interface describes the shape of the data that will be used to create a new User document.

interface UserAttributes {
    email: string,
    password: string
}

//This interface describes the static methods for the User Model.

interface UserModel extends mongoose.Model<UserDocument> {
    build(attributes: UserAttributes): UserDocument;
}


//This interface describes the properties and shape of a Single User Document has.
interface UserDocument extends mongoose.Document {
    email: string;
    password: string;
}


const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
}, {

    toJSON: { 
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret.password; //Remove properties when JSON Representation is shown.
            delete ret.__v;      
            delete ret._id;
        }
    }


});

//Middleware that will execute this before saving document to database.
userSchema.pre('save', async function (done) {

    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }

    done();
});


//Custom function to build user.
userSchema.statics.build = (attributes: UserAttributes) => {
    return new User(attributes);
}



const User = mongoose.model<UserDocument, UserModel>('User', userSchema);


export { User};