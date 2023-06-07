import { Order } from "../../common_interfaces/Order";
import { GetServerSideProps } from 'next';
import buildClient from "../../api/build-client";
import { useEffect} from "react";
import { useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { useAuthContext } from "../../custom_hooks/useAuthContext";
import UseRequest from "../../custom_hooks/UseRequest";
import Router from 'next/router';

//The Structure of props that Order Detail Component takes.
interface OrderDetailProps {
    order: Order
}

const OrderDetails = ({ order }: OrderDetailProps) => {

    const [timeLeft, setTimeLeft] = useState<string>('');
    const { state } = useAuthContext(); //User State

    //Make Post Requests to Payment Service, to make payment.
    const { doRequest, errors } = UseRequest({
        url: '/api/payments',
        method: 'post',
        body: {
            orderId: order.id
        },
        onSuccess: (payment) => Router.push('/orders/success')
    });
    

    useEffect(() => {
        console.log(order);

        //Find how much time is left for user to complete order.
        const findTimeLeft = () => {
            const msLeft = new Date(order.expiresAt).getTime() - new Date().getTime();

            // Check if msLeft is NaN or negative and handle accordingly
            if (isNaN(msLeft) || msLeft < 0) {
                setTimeLeft("Expired"); // Or any other appropriate message
            } else {
                setTimeLeft(String(Math.round(msLeft / 1000)));
            }
        }

        findTimeLeft();

        // Set up interval to update the remaining time every second
        const timerId = setInterval(findTimeLeft, 1000);

        //When we leave component clear the interval.
        return () => {
            clearInterval(timerId);
        }
    }, [order]);


   
    
    return (
        <div>
            <div className="container mb-4">
                <h1 className="display-4">Order Details</h1>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">Order ID: {order.id}</p>
                        <p className="card-text">Status: {order.status}</p>
                        <p className="card-text">Ticket Title: {order.ticket.title}</p>
                        <p className="card-text">Ticket Price: ${order.ticket.price}</p>
                    </div>
                </div>
            </div>

            <div className="container mb-4">
                <h2 className="mb-3">{timeLeft} seconds until order expires</h2>
                <div className="card">
                    <div className="card-body">
                        <StripeCheckout
                            token={({ id }) => doRequest({ token: id })}
                            stripeKey={process.env.NEXT_PUBLIC_PUBLICAPI_KEY!}
                            amount={parseInt(order.ticket.price) * 100}
                            email={state.user!.email}
                        />
                        {errors &&
                            errors.map((err: any) => (
                                <div className="alert alert-danger" key={err.message}>
                                    {err.message}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );

}



//Retrieve Order Detail Information.
export const getServerSideProps: GetServerSideProps<OrderDetailProps> = async (context) => {
    try {
        const { orderId } = context.query;
        const client = buildClient(context);
        const response = await client.get(`/api/orders/${orderId}`);
        if (response.status === 200) {
            const data: Order = response.data;
            return {
                props: {
                    order: data, 
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
            order: {} as Order, 
        },
    };
};




export default OrderDetails;