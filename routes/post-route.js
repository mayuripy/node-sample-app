import express from "express";
import { createAPost,likePost } from "../controllers/index.js";
import { verifyUser } from "../middlewares/index.js";
//import { likePost } from "../controllers/index.js";
const postRouter = express.Router();

postRouter.post("/create-post", verifyUser, createAPost)
 postRouter.post("/like-post/:id", verifyUser, likePost);
// postRouter.get("/:id", verifyUser, getPost);

export { postRouter };