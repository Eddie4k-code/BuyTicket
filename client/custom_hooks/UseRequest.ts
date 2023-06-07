import axios from 'axios';
import React,{ useState } from 'react';
import { useAuthContext } from './useAuthContext';



/*

   The Custom Hook for making a request.

 */



//All potential Http Methods (Defining the Type)
type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'


//Defines the Shape of the props for UseRequest
interface UseRequestProps {
    url: string;     
    method: HttpMethod; 
    body?: object;
    onSuccess?: (data:any) => void;
}


//The Actual Hook
const UseRequest = ({ url, method, body, onSuccess}: UseRequestProps) => {

    const [errors, setErrors] = useState<any[]>([]);
    const { dispatch } = useAuthContext();

    const doRequest = async (props = {}) => {

        try {
            setErrors([]);
            const response = await axios[method](url, {...body, ...props});

            if (onSuccess) {
                onSuccess(response.data);
              
            }

            return response.data;

        } catch (err: any) {

            setErrors(err.response.data.errors);

        }
    }



    return { doRequest, errors };



}


export default UseRequest;
