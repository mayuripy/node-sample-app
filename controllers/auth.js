import { json } from "express";
import { User } from "../models/index.js";
import jwt from "jsonwebtoken";

const SECRET_KEY = "shakalakaboomboom";

export const signupUser = async (req, res) => {
    const { name, username, password } = req.body;

    try {
        const user = await User.create({ name, username, password });
        const savedUser = await user.save();
        console.log(savedUser);
        console.log(savedUser._id);

        const payload = {
            id: savedUser._id
        };

        /**
         payload = {
            id: new ObjectId("652a7e0bebbe045d4b6c5d4c");
         }
         */

        const jwtToken = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });

        return res.status(201).json(jwtToken);
    } catch (error) {
        return res.status(400).json(error);
    }

}


export const signinUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(404).json({ message: "User does not exists!" });
        }
        if (user.password !== password) {
            return res.status(404).json({ message: "Invalid credentials" });
        }
        const payload = {
            id: user._id
        };
        const jwtToken = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
        return res.status(200).json(jwtToken);
    } catch (error) {
        return res.status(400).json(error);

    }
}

export const deleteUser = async (req, res) => {
    const authHeader = req.get("Authorization");
    const { id } = req.params;


    try {
        const payload = jwt.verify(authHeader, SECRET_KEY);
        console.log(payload);
        if (payload.id !== id) {
            return res.statu(400).json({ message: "You cannot delete other user's account!" });
        }
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const deletedUser = await user.deleteOne();
        return res.status(200).json(deletedUser);
    } catch (error) {
        return res.status(404).json(error);
    }

}

// export const updateUser = async (req, res) => {
//     const authHeader = req.get("Authorization");
//     const { id } = req.params;
//     const { username, password } = req.body;

//     try {
//         const payload = jwt.verify(authHeader, SECRET_KEY);

//         // Check if the user making the request is the owner of the account
//         if (payload.id !== id) {
//             return res.status(403).json({ message: "You cannot update other user's account!" });
//         }


//         const user = await User.findById(id);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         user.username = username;
//     }
//     if (password) {
//         user.password = password;



//         await user.save();

//         return res.status(200).json({ message: "User updated successfully" });
//     } catch (error) {
//         return res.status(400).json(error);
//     }
//      finally{
        
//      }
// }


export const updateUser=async (req,res) => {
    const{id}= req.params;
    const userId =req.userId;

    try{
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message:"user is note found"})
        }
        

        if (userId!==id){
            return res.status(400),json({message:"you can not updated"})
        }
        const updateUserData =await user.save();
        Object.assiggn(user.updateUserData);

        const updateUser =await user.save();
        return res.status(500).json(updateUserData);

    }catch(error){
        return res.statuse(500).json(error);

    }

}