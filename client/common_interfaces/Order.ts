import { Ticket } from "./Ticket";

export interface Order {
    expiresAt: string,
    id: string,
    status: string,
    ticket: Ticket,
    userId: string,
    version: number
}