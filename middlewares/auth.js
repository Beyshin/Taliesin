exports.checkAdmin = (req, res, next) => {
    res.locals.userRole = req.query.role;
    next();
}