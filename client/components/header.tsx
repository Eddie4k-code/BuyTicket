import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAuthContext } from '../custom_hooks/useAuthContext';
import { useLogout } from '../custom_hooks/useLogout';


//Navbar which will be displayed in BaseLayout Component.





//Defines the Shape of the props for the Header.
interface headerProps {
    currentUser: object | null;
}





const Header = () => {

    const { state } = useAuthContext();
    const { logout } = useLogout(); // Call the useLogout hook

    //Handle Logout
    const handleLogout = async () => {
        await logout();
    }

    return (

        <nav className="navbar navbar-lg navbar-light bg-dark">

            <Link className="navbar-brand text-white mb-4 display-5 ps-3" href="/">
                BuyTicket
                
            </Link>


            <div className="d-flex justify-content-end">
                <ul className="nav d-flex align-items-center">
                    <li className="nav-item text-white text-decoration-none"><a className="nav-link" href="/">{state.user && 'Tickets'}</a></li>
                    <li className="nav-item text-white text-decoration-none"><a className="nav-link" href="/tickets/new">{state.user && 'Add New Ticket'}</a></li>
                    <li className="nav-item text-white text-decoration-none"><a className="nav-link" href="/orders/">{state.user && 'My Orders'}</a></li>
                    <li className="nav-item text-white text-decoration-none"><a onClick={handleLogout} className="nav-link">{state.user && 'Sign Out'}</a></li>
                    <li className="nav-item text-white text-decoration-none"><a className="nav-link" href="/auth/signin">{!state.user && 'Sign In'}</a></li>
                    <li className="nav-item text-white text-decoration-none"><a className="nav-link" href="/auth/signup">{!state.user && 'Sign Up'}</a></li>
                </ul>
            </div>
            

        </nav>
    );


}

export default Header;