import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

//Provides a convenient way to access the 'AuthContext' values wit hout having to use the useContext hook every time we need to access the content.

export const useAuthContext = () => {
    const context = useContext(AuthContext)


    if (!context) {
        throw Error('useAuthContext must be used inside AuthContextProvider');
    }

    return context;
}