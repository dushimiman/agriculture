import express from "express";
import productscontroller from "../controllers/productscontroller";
import Validator from '../middlewares/validator';
import verifyToken from "../middlewares/verifyToken";
import  verifyAccess from "../middlewares/verifyAccess"

 

 

const productsroute = express.Router()

productsroute.post(

  "/create", verifyToken,

  verifyAccess("seller"),
Validator.newproductsRules(),
Validator.ValidatorInput,
productscontroller.createproducts);
productsroute.get( "/all", productscontroller.getAllproducts);
 productsroute.get( "/:id",productscontroller.getoneproduct);
 productsroute.delete("/:id",productscontroller.deleteoneproduct);
export default productsroute;
