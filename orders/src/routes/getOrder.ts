import express, { Request, Response } from 'express';
import { currentUser } from '../middlewares/current-user';
import { requireAuth } from '../middlewares/require-auth';
import { Order } from '../models/order';

// Get Orders
const router = express.Router();

router.get('/api/orders', currentUser, requireAuth, async (req: Request, res: Response) => {
    const orders = await Order.find({ userId: req.currentUser!.id }).populate('ticket').exec();

    return res.status(200).json(orders);
});

export { router as getOrderRouter };
