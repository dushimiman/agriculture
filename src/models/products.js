import mongoose from "mongoose";
const productsSchema = new mongoose.Schema(
  {
    productname: String,
    description: String,
    availablequantity: String,
    date: String,
    price: String,
    seller:{
        type:mongoose.Schema.ObjectId,
        ref:'User'},

    images: [
      {
        type: String,
      },
    ],
  },

  {
    timestamps: true,
  }
);

productsSchema.pre(/^find/, function (next) {
    this.populate({
      
      path:"seller",
      select: "firstname lastname phone email address gender",
    })
    next();
  });


const products = mongoose.model("products", productsSchema);

export default products;
