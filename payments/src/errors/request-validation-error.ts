import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

/* This class is a custom error class that extends the base 'CustomError' This class provides a way to represent errors that occur during request validation (Wrong Email, password, etc)*/


export class RequestValidationError extends CustomError {

    statusCode = 400;

    public errors: ValidationError[];

    constructor(errors: ValidationError[] ) {
        super('Invalid Request Parameters');
        this.errors = errors;

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    //Maps each error
    serializeErrors() {
        return this.errors.map(err => {

            return { message: err.msg };

        });
    }

} 