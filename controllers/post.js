export const createAPost = (req, res) => {
    if(res.locals.userExists === true){
        //Post creation
        return res.status(200).json("Successfully created a post!");
    } else {
        return res.status(400).json("Post creation failed!");
    }
}

// export const likePost = (req,res) => {
//     if(res.userExists == true){
//     return res.status(200).json("like A post")
//     }else{
//         return res.status(400).json("not like a post")
//     }

// }