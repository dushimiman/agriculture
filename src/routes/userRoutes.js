import express from "express";
import UserController from "../controllers/userController";
//import verfyAccess from "../middlewares/verifyAccess"


const userRouter = express.Router(); 	
userRouter.post("/register", UserController.createUser)
userRouter.get("/all",UserController.getallUser)
userRouter.get("/:id",UserController.getOneUser)
userRouter.delete("/:id",UserController.deleteOneUser)
userRouter.patch("/:id",UserController.updateUser)




export default userRouter;