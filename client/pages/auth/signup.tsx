import React from 'react';
import { useState } from 'react';
import UseRequest from '../../custom_hooks/UseRequest'
import Router from 'next/router';
import BaseLayout from '../BaseLayout';
import { GetServerSideProps } from 'next';
import buildClient from '../../api/build-client';
import { Sign } from 'crypto';
import { useAuthContext } from '../../custom_hooks/useAuthContext';



const signup = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { state, dispatch } = useAuthContext();

    //Current User from Auth Context
    const currentUser = state.user;

    //Post Request to Sign User Up.
    const { doRequest, errors } = UseRequest({

        url: '/api/users/signup',
        method: 'post',
        body: {
            email,
            password
        },
        onSuccess: (data) => {
            dispatch({ type: 'LOGIN', payload: { id: data.id, email: data.email } });
            Router.push('/')
        }

    });

    const onSubmit =  async (e:React.FormEvent) => {
        e.preventDefault();
        doRequest();


    }


    return (
        <div className="flex-column d-flex align-items-center">
            <img src="https://img.freepik.com/free-vector/party-crowd-banner-against-sunset-sky_1048-12631.jpg?w=2000" className="img-fluid w-50" alt="Responsive image"></img>
        <form onSubmit={onSubmit} className="container">
            <h1 className="text-center mb-4 display-5">Join the Ticket Marketplace</h1>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                />
            </div>

            {errors && errors.map((err: any) => (
                <div className="alert alert-danger" key={err.message}>
                    {err.message}
                </div>
            ))}

            <button className="btn btn-primary btn-block">Sign Up</button>

            <p className="text-center mt-4">
                Already have an account? <a href="/auth/signin">Sign In</a>
            </p>
            </form>
        </div>
    );




}

export default signup;
