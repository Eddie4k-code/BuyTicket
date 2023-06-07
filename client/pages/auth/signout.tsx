import Router from 'next/router';
import React, { useEffect } from 'react';
import { useAuthContext } from '../../custom_hooks/useAuthContext';
import UseRequest from '../../custom_hooks/UseRequest';

const Signout = () => {
    const { dispatch } = useAuthContext();

    // Making API Request From Client to sign the user out. (in the backend this will make session cookie equal to null)
    //In the frontend we dispatch to our AuthContext to use the Action Logout.
    const { doRequest } = UseRequest({
        url: '/api/users/signout',
        method: 'post',
        body: {},
        onSuccess: () => {
            dispatch({ type: 'LOGOUT' });
            Router.push('/');
        },
    });

    useEffect(() => {
        doRequest();
    }, [])


    return <div>Signing Out...</div>;
};

export default Signout;

