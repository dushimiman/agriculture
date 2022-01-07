import express from "express";

 

import productscontroller from "../controllers/productscontroller";

 

 

const productsroute = express.Router()

productsroute.post(

  "/create",productscontroller.createproducts);
productsroute.get( "/all",productscontroller.getAllproducts);
 productsroute.get( "/:id",productscontroller.getoneproduct);
 productsroute.delete("/:id",productscontroller.deleteoneproduct);
export default productsroute;
