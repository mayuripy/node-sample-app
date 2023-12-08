// export const updateUser= (req, res) => {

//     if (res.userExists == true) {
//         return res.status(200).json("signin Successfully!")
//     } else {
//         return res.status(400).json("some Error")
//     }

// }

import express from "express";

const authRouter = express.Router();

authRouter.patch("/", )

export { authRouter };

// import express from "express";

// const authRouter = express.Router();

// authRouter.post("/", )

// export { authRouter };if (username) {
            user.username = username;
        
        if (password) {
            user.password = password;
        }


