/* This class is a custom error class that extends the base 'CustomError' This class provides a way to represent errors that occur during connecting to the Mongo Database*/

import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    reason:string = 'Error Connecting to Database';
    statusCode: number = 200;
    constructor() {
        super('Error Connecting to Database.');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);

    }


    serializeErrors() {
        return [{ message: this.reason }];
    }


}