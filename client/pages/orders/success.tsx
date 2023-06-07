import React from 'react';

const SuccessPage = () => {

    return (
        <div className="container text-center">
            <div className="mt-5">
                <h1 className="display-4 text-success">Order Success!</h1>
                <p className="lead">Thank you for your purchase.</p>
                <p>Your order has been successfully processed.</p>
                <p>An email with your order details will be sent shortly.</p>
            </div>
        </div>
    );

}

export default SuccessPage;