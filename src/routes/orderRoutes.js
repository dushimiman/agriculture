import express from "express";
import orderController from "../controllers/orderController";

const orderRouter = express.Router(); 
orderRouter.post("/create", orderController.createOrder)
orderRouter.get("/all", orderController.getallOrder)
orderRouter.get("/:id",orderController.getOneOrder)
orderRouter.delete("/:id",orderController.deleteOneOrder)
orderRouter.patch("/all", orderController.patchallOrder)

export default orderRouter;