import { useAuthContext } from "../custom_hooks/useAuthContext"
import Router from 'next/router';
import React, { useEffect } from "react";

//Protect Components to make sure only Authenticated users are accessing it.

interface ProtectedComponentProps {
    children: React.ReactNode;
}

const ProtectedComponent = ({children}:ProtectedComponentProps) => {

    const { state } = useAuthContext();


    useEffect(() => {

        //If auth context is null then we must redirect
        if (!state.user) {
            Router.push('/auth/signin');
        }

        console.log('Protected Route Says' + state.user);

       

    }, [state.user]);

    if (!state.user) {
        return <></>
    }


    return <>{children}</>

}

export default ProtectedComponent;