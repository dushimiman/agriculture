import mongoose from "mongoose";
const agricultureSchema = new mongoose.Schema(
  {
    buyer: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    product: {
      type: mongoose.Schema.ObjectId,
      ref: "products",
    },
    quantity: Number,
    status: {
      type: String,

      enum: ["pending", "accepted", "declined", "canceled"],

      default: "pending",
    },
  },

  {
    timestamps: true,
  }
);
agricultureSchema.pre(/^find/, function (next) {
  this.populate({
    path: "buyer",
    select: "firstname lastname userPhone email address gender",
  }).populate({
    path: "product",
  });
  next();
});
const Order = mongoose.model("Order", agricultureSchema);

export default Order;
