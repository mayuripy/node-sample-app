// Module Syntax
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { postRouter, authRouter} from "./routes/index.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
})
//app.use("./")
app.use("/post", postRouter);
app.use("/auth", authRouter);
const connectToDB = async () => {
    try {
        const res = await mongoose.connect("mongodb+srv://chaudharimayuri2004:Mayuri2004@cluster0.lnub8zl.mongodb.net/");
        return;
    } catch (error) {
        console.log(error);
        throw Error("new Error");
    }
}

const res = connectToDB()
    .then(() => {
        app.listen(5000, () => {
            console.log("Listening to app on port 5000!")
        })
    })
    .catch((err) => {
        console.log("Cannot listen to the app!")
    })
    .finally(() => {
        console.log("Completed finally!");
    });