import React from 'react';
import { ReactNode } from "react";
import Header from '../components/header';


/* Pages passes the currentUser to BaseLayout and it passes it to the header.*/



//Defines the Shape of the props for BaseLayout.
interface BaseLayoutProps {
    children: ReactNode,
    currentUser: object | null;
}


const BaseLayout = ({children, currentUser}:BaseLayoutProps) => {
    return (


        <div>

            <Header currentUser={currentUser} />
            {children}
        </div>




    );
}


export default BaseLayout;

