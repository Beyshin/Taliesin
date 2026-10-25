exports.userData = (req, res, next) => {
    //TODO:
    res.locals.role = req.session?.role || null;
    res.locals.username = req.session?.username || null;
    next();
}

exports.checkAdmin = (req, res, next) => {
    if(req.session?.role === "admin") {
        next()
    }
    else {
        res.send("Brak uprawnien")
    }
}