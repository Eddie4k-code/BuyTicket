import React, { createContext, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
import { Session } from 'inspector';
import axios, {AxiosResponse, AxiosError} from 'axios'

//The Inital Auth State.
const defaultAuthState: AuthState = {
    user: null
}

export const AuthContext = createContext<AuthContextValue>({
    state: defaultAuthState,
    dispatch: () => { },
});

//The Type that createContext with take
type AuthContextValue = {
    state: AuthState;
    dispatch: React.Dispatch<AuthActions>;
};

//The shape of the payload for AuthContext.
export interface AuthPayload {
    id: string;
    email: string;
}

//The Shape of the State for AuthContext
export interface AuthState {
    user: AuthPayload | null;
}


//Actions in AuthContext that will be dispatched
export type AuthActions = { type: 'LOGIN'; payload: AuthPayload } | { type: 'LOGOUT'; callback?: () => void };


export const authReducer = (state: AuthState, action:AuthActions) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}


export interface AuthContextProviderProps {
    children: React.ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });

    //Logic update the user state if user is already logged in.
    const checkCurrentUser = async (): Promise<void> => {
        try {
            const response: AxiosResponse = await axios.get('/api/users/currentuser');
            const data: any = response.data; // Modify the 'any' type to match the actual response data structure

            if (data.currentUser) {
                dispatch({ type: 'LOGIN', payload: { id: data.currentUser.id, email: data.currentUser.email } });
            }

            // Handle the response data
            console.log(data);
        } catch (err: any) {
            // Handle the error
            dispatch({ type: 'LOGOUT'})
            console.error(err.response?.data);
        }
    };

    
    useEffect(() => {
        checkCurrentUser();
        
    }, []);


  
    console.log('Auth Context States:', state);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};






