export const verifyUser = (req, res, next) => {
    res.locals.userExists = false;
    console.log(res.locals);
    next();
}

