import mongoose from "mongoose";
const agricultureSchema = new mongoose.Schema(

    {
        userId:String,
        productId:String,
        status:String,
        address:String,
  
    //   user: {
  
    //     type: mongoose.Schema.ObjectId,
  
    //     ref: "User",
  
    //   },
  
    //   product: {
  
    //     type: mongoose.Schema.ObjectId,
  
    //     ref: "product",
  
    //   },
  
    //   status: {
  
    //     type: String,
  
    //     enum: ["pending", "accepted", "declined", "canceled"],
  
    //     default: "pending",
  
    //   },
  
    },
  
    {
  
      timestamps: true,
  
    }
  
  );
  const Order = mongoose.model("Order",agricultureSchema);

 

  export default Order;
