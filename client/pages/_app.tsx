import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { AuthContextProvider } from '../context/AuthContext';
import { useAuthContext } from '../custom_hooks/useAuthContext';
import { GetServerSideProps } from 'next';
import buildClient from '../api/build-client';
import Header from '../components/header';


export default ({ Component, pageProps }: AppProps) => {
    const { state } = useAuthContext();
    const currentUser = state.user;

    return (
        <AuthContextProvider>
            <Header />
            <div className="container">
               <Component currentUser={currentUser} {...pageProps} />
            </div>
        </AuthContextProvider>
    )
}





