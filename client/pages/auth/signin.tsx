import React from 'react';
import { useState } from 'react';
import UseRequest from '../../custom_hooks/UseRequest'
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import buildClient from '../../api/build-client';
import { useAuthContext } from '../../custom_hooks/useAuthContext';


const signin = () => {
    const { dispatch } = useAuthContext();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { state } = useAuthContext();
    const currentUser = state.user;
    const { doRequest, errors } = UseRequest({

        url: '/api/users/signin',
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

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        doRequest();


    }


    return (
        <form onSubmit={onSubmit}>

            <h1>Sign In</h1>

            <div className="form-group">

                <label>Email Address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="form-control" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="form-control" />
            </div>


            {errors && errors.map((err: any) => (
                <div className="alert alert-danger">
                    <li key={err.message}>{err.message}</li>
                </div>
            ))}

            <button className="btn btn-primary">Sign In</button>


            </form>

    );


}

export default signin;




