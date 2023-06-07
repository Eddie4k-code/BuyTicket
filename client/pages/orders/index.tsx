import React from "react";
import { GetServerSideProps } from 'next';
import { Order } from '../../common_interfaces/Order';
import buildClient from "../../api/build-client";

//The Structure of props that My Orders Component takes.
interface MyOrdersProps {
    orders: Order[];
}

const MyOrders = ({orders} : MyOrdersProps) => {

    return (
        
        <div className="container">
            <h1 className="mt-4 display-5">My Orders</h1>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Ticket</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => 
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.ticket.title}</td>
                            <td>${order.ticket.price}</td>
                            <td>{order.status}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        
        )

}

//Retrieve Order Detail Information.
export const getServerSideProps: GetServerSideProps<MyOrdersProps> = async (context) => {
    try {
        const client = buildClient(context)
        const response = await client.get("/api/orders");
        if (response.status === 200) {
            const data: Order[] = response.data;
            return {
                props: {
                    orders: data, 
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
            orders: [], 
        },
    };
};




export default MyOrders;