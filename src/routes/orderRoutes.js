import express from "express";
import orderController from "../controllers/orderController";
import verfyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken"
 

const orderRouter = express.Router(); 
orderRouter.post("/:id", verifyToken, verfyAccess("buyer"), orderController.createOrder)
orderRouter.get("/all", verifyToken, verfyAccess("seller"), orderController. getAllOrderbyUserId)
orderRouter.get("/all/orders", orderController.getAllOrders)
orderRouter.get("/:id",orderController.getOneOrder)
orderRouter.delete("/:id",orderController.deleteOneOrder)
orderRouter.patch("/all", verifyToken, verfyAccess("admin"), orderController.patchallOrder)

export default orderRouter;