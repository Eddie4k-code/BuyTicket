import mongoose from "mongoose";
import { app } from "./app";

/* Starts the Express Application and Mongo Database */



//Create Express App
app.listen(3000, () => {
    console.log('Running on port 3000!');
});

//Start DB
const startDB = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY Must be Defined!');
    }

    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth').then(() => console.log('Connected to DB')).catch(err => console.log(err));
}


startDB();
