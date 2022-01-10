import mongoose from 'mongoose';
const productsSchema = new mongoose.Schema(
   
    {
        
            productname: String,
            description: String,
            availablequantity: String,
            date: String,
            price: String,
            // user:{
            //     type:mongoose.Schema.ObjectId,
            //     ref:'User'},

            images:[
            {
                type:String,
            },
            ],
       
           
        },
    
        {
            timestamps: true,  
        }
        );
        const products = mongoose.model('products',productsSchema)

        export default products;