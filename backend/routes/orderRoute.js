import express from "express";
import authMiddleware from "../middleware/auth.js";
import {palceOrder, userOrders, verifyOrder} from "../controllers/orderController.js";

const orderRouter=express.Router();

orderRouter.post("/place",authMiddleware,palceOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders)


export default orderRouter;