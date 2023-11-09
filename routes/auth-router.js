import express from "express";
import { deleteUser, signinUser, signupUser,updateUser } from "../controllers/index.js";

const authRouter = express.Router();

authRouter.post("/signin", signinUser);
 authRouter.post("/signup", signupUser);
 authRouter.delete("/delete/:id", deleteUser);
 authRouter.patch("/update/:id,", updateUser);
//authRouter.put("/activate/:id", activateUserAccount);

export {authRouter};
