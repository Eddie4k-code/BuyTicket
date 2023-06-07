
import { useEffect } from "react";
import buildClient from "../../api/build-client";
import { Ticket } from "../../common_interfaces/Ticket";
import { GetServerSideProps } from 'next';
import UseRequest from "../../custom_hooks/UseRequest";
import Router from 'next/router';
import { useAuthContext } from "../../custom_hooks/useAuthContext";

//The structure of the props that TicketDetail component recieves
interface TicketDetailProps {
    ticket: Ticket;
}



const TicketDetail = ({ ticket }: TicketDetailProps) => {

    const { state } = useAuthContext();
  
    const { doRequest, errors } = UseRequest({
        url: '/api/orders',
        method: 'post',
        body: { ticketId: ticket.id },
        onSuccess: (order) => {
            Router.push(`/orders/[orderId]`, `/orders/${order.id}`); //Redirect to order page.
        }

    });


    return (
        <div className="container">
            <div className="my-4">
                <h1 className="display-4">{ticket.title}</h1>
                <h4 className="text-muted">${ticket.price}</h4>
            </div>

            {errors &&
                errors.map((err: any) => (
                    <div className="alert alert-danger" key={err.message}>
                        {err.message}
                    </div>
                ))}

            <button onClick={() => doRequest()} disabled={!state.user} className="btn btn-primary">
                Purchase
            </button>

            {!state.user && <h4 className="text-center mt-5 text-danger">Please Login to Purchase this Ticket.</h4> }

        </div>
    );


    
}
//Retrieve Ticket Detail Information.
export const getServerSideProps: GetServerSideProps<TicketDetailProps> = async (context) => {
    try {
        const { ticketId } = context.query;
        const client = buildClient(context);
        const response = await client.get(`/api/tickets/${ticketId}`);
        if (response.status === 200) {
            const data: Ticket = response.data;
            return {
                props: {
                    ticket: data, 
                },
            };
        } else {
            console.log('Failed to fetch ticket');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }

    return {
        props: {
            ticket: {} as Ticket, 
        },
    };
};





export default TicketDetail;

