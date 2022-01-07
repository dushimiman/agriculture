

import UserInfos from "../models/user";

class UserController {
 	
 //Create user 
 	
 static async createUser(req, res) {
 	
   const user = await UserInfos.create(req.body);
 	
   if (!user) { 	
     return res.status(404).json({ error: "user not registered" }); 	
   } 	
   return res 	
     .status(200) 	
     .json({ message: "User created successfully", data: user }); 	
 }

 static async getallUser(req,res){
    const users = await UserInfos.find(req.body);
    if (!users){
        return res.status(400).json({error:"user not registerd"});
    }
    return res .status(200).json({message:"user is found",data: users});
}
static async getOneUser(req,res){
    const users = await UserInfos.findById(req.params.id);
    if (!users){
        return res.status(400).json({error:"user not registerd"});
        
    }
    return res .status(200).json({message:"user is found",data: users});
}
static async deleteOneUser(req,res){
    const users = await UserInfos.findByIdAndDelete(req.params.id);
    if (!users){
        return res.status(400).json({error:"user not deleted"});
        
    }

    return res .status(200).json({message:"user is deleted"})
}

}

 export default UserController;