import orderInfo from "../models/order";
import productInfos from "../models/products";
import * as sendSms from "../helpers/sendSms";
class orderController {
  static async createOrder(req, res) {
    const product = await productInfos.findById(req.params.id);

    const Order = await orderInfo.create({
      buyer: req.user._id,
      product: req.params.id,
      quantity: req.body.quantity,
    });

    if (!Order) {
      return res.status(404).json({ error: "order not registered" });
    }
    sendSms.sendSmsToSeller(
      req.user.lastName,
      req.user.phone,
      product.productname,
      req.body.quantity,
      product.seller.phone
    );

    return res
      .status(200)
      .json({ message: "order created successfully", data: Order });
  }

  static async getAllOrderbyUserId(req, res) {
    console.log(req.user._id);
    const Order = await orderInfo.find({ user: req.user._id });
    if (!Order) {
      return res.status(400).json({ error: "Order not registerd" });
    }
    return res.status(200).json({ message: "order is found", data: Order });
  }

  static async getAllOrders(req, res) {
    const Order = await orderInfo.find();
    if (!Order) {
      return res.status(400).json({ error: "Order not registerd" });
    }
    return res.status(200).json({ message: "order is found", data: Order });
  }

  static async getOneOrder(req, res) {
    const Order = await orderInfo.findById(req.params.id);
    if (!Order) {
      return res.status(400).json({ error: "Order not registerd" });
    }
    return res.status(200).json({ message: "user is found", data: Order });
  }

  static async deleteOneOrder(req, res) {
    const Order = await orderInfo.findByIdAndDelete(req.params.id);
    if (!Order) {
      return res.status(400).json({ error: "Order not deleted" });
    }

    return res.status(200).json({ message: "Order is deleted" });
  }

  static async patchallOrder(req, res) {
    const Order = await orderInfo.findByIdAndDelete(req.params.id);
    if (!Order) {
      return res.status(400).json({ error: "Order not updated" });
    }

    return res.status(200).json({ message: "Order is updated", data: Order });
  }
}

export default orderController;
