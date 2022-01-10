import productsInfos from "../models/products";

 

class productscontroller {

  //create products

  static async createproducts(req, res) {

  

    const products = await productsInfos.create(req.body);

 

    if (!products) {

      return res.status(404).json({ error: "failed to create products" });

    }

 

    return res.status(201).json({

      message: "products created successfully",

      data: products,

    });
}

// get all products

static async getAllproducts(req,res){
  const products = await productsInfos.find();
 
  if(!products){
 return res.status(404).json({error:"products not retrieved"})
  }
  return res 
  .status(200)
  .json({message:'successfully retrived products',data:products});
}

  //get one product
  static async getoneproduct(req,res){
    const products =await productsInfos.findById(req.params.id);
    if(!products){
        return res.status(404).json({error:"products not found"});
    }
    return res
    .status(200)
    .json({message:'products  found',data:products});
}
 //delete one product
 static async deleteoneproduct(req,res){
  const products =await productsInfos.findById(req.params.id);
  if(!products){
      return res.status(404).json({error:"unable to delete products"});
  }
  return res
  .status(200)
  .json({message:'products deleted'});
}
}

export default productscontroller;