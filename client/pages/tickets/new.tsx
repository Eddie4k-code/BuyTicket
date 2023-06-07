import React from 'react';
import { useState } from 'react';
import UseRequest from '../../custom_hooks/UseRequest';
import Router from 'next/router';
import ProtectedComponent from '../../components/ProtectedRoute';

const NewTicket = () => {
    //Title State
    const [title, setTitle] = useState<string>('')
    //Price State
    const [price, setPrice] = useState<string>('');

    //Request for posting a new ticket to DB.
    const { doRequest, errors } = UseRequest({
        url: '/api/tickets',
        method: 'post',
        body: { title, price },
        onSuccess: (ticket) => {
            Router.push('/');
        }
    });

    //When User Clicks out of Input (set for price input)
    const onBlur = () => {
        //Make Sure Price is a Valid Number
        const value = parseFloat(price);

        if (isNaN(value)) {
            return;
        }

        //Round
        setPrice(value.toFixed(2));

    }


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        doRequest();
    }


    return (
        <div className="container">
            <h1 className="text-center mb-4 display-5">Add New Ticket</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Enter the title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        className="form-control"
                        value={price}
                        onBlur={onBlur}
                        onChange={(e) => setPrice(e.target.value)}
                        type="text"
                        placeholder="Enter the price"
                        required
                    />
                </div>
                {errors && errors.map((err) => (
                    <div className="alert alert-danger" key={err.message}>
                        {err.message}
                    </div>
                ))}
                <button className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
        );

}

export default NewTicket;