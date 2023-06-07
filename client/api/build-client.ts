

import axios, { AxiosInstance } from 'axios';
import { GetServerSidePropsContext } from 'next';
/*

   Creates an axios instance based on the environment it is running on. 
   
   returns the Axios instance that can be used to make HTTP requests

 */



const buildClient = (context: GetServerSidePropsContext): AxiosInstance => {
    if (typeof window === 'undefined') {
        // We are on the server
        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: context.req?.headers || {},
        });
    } else {
        // We are on the client
        return axios.create({
            baseURL: '',
        });
    }
};

export default buildClient;
