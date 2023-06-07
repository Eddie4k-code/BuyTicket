import { CustomError } from './custom-error';


/* This class is a custom error class that extends the base 'CustomError' This class provides a way to represent errors that occur during a bad request. */


export class BadRequestError extends CustomError {
    statusCode = 400;

    public message:string
    
    constructor(message: string) {
        super(message);
        this.message = message;

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }



}