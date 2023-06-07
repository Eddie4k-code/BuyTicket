//Custom Hook for Logging Out

import { useState } from "react";
import { useAuthContext } from "./useAuthContext"
import UseRequest from "./UseRequest";
import axios from 'axios';


export const useLogout = () => {
    const { dispatch, state } = useAuthContext();
    const [errors, setErrors] = useState<string[]>();
    const [loading, setLoading] = useState<boolean>();
    

    const logout = async () => {
        try {
            setLoading(true);

            //Dispatch to AuthContext to update user state.
            dispatch({ type: 'LOGOUT' });


            //Make API Request to backend.
            const response = await axios.post('/api/users/signout', {});

            if (response.status == 200) {
                setLoading(false);
            }


        } catch (err: any) {
            console.log(err);
            setLoading(false);
        }


    };


    return { logout, errors, loading };




    
}