import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';

let mongo: any;

//Runs Before All Tests are Executed
beforeAll(async () => {
    process.env.JWT_KEY = 'secret123';

    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri).then(() => 'Testing DB Connected');
});

//Runs before each of our tests
beforeEach(async () => {

    const collections = await mongoose.connection.db.collections();


    //Reset Data
    for (let collection of collections) {
        await collection.deleteMany({});
    }




});



//After all tests are complete
afterAll(async () => {
    if (mongo) {
        await mongo.stop();
    }
    await mongoose.connection.close();
});