import { CustomError } from './custom-error';


export class NotAuthorizedError extends CustomError {
    statusCode = 401;

    constructor() {

        super('User is not Authorized');

        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors() {
        return [{ message: 'User is not Authorized.' }];
    }

}