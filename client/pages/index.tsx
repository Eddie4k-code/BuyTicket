import axios from 'axios';
import { GetServerSideProps } from 'next';
import buildClient from '../api/build-client';
import { useAuthContext } from '../custom_hooks/useAuthContext';
import Link from 'next/link';
import { Ticket } from '../common_interfaces/Ticket';

// The Props this component will take from getServerSideProps.
interface LandingProps {
    tickets: Ticket[];
}

const Landing = ({ tickets }: LandingProps) => {
    const { state } = useAuthContext();
    const currentUser = state.user;

    // List of Tickets we fetched from db.
    const ticketList = tickets.map((ticket) => {
        return (
            <div className="col-lg-4 col-md-6 mb-4" key={ticket.id}>
                <div className="card shadow">
                    <div className="card-body">
                        <h5 className="card-title">{ticket.title}</h5>
                        <p className="card-text">${ticket.price}</p>
                        <a href={`/tickets/${ticket.id}`} className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <h1 className="mb-4 display-5">Tickets</h1>
            {ticketList.length > 0 ? <div className="row">
                {ticketList}
            </div>

                :

            <p className="mb-4 display-6">No Tickets are being sold at this time, please check again later!</p>  
                }
            
            


        </div>
    );
};

//Retireves all Tickets that are available for purchase!
export const getServerSideProps: GetServerSideProps<LandingProps> = async (context) => {
    try {
        const client = buildClient(context);
        const response = await client.get('/api/tickets');
        if (response.status === 200) {
            const data: Ticket[] = response.data;
            return {
                props: {
                    tickets: data,
                },
            };
        } else {
            console.log('Failed to fetch tickets');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }

    return {
        props: {
            tickets: [],
        },
    };
};

export default Landing;
