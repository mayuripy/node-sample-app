export const signinUser = (req, res) => {

    if (res.userExists == true) {
        return res.status(200).json("signin Successfully!")
    } else {
        return res.status(400).json("some Error")
    }

}