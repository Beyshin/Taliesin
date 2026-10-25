const express = require("express");
const {checkAdmin} = require("../middlewares/auth");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
})

router.get("/login", (req, res) => {
    res.render("login");
})

router.post("/login", (req, res) => {
    //TODO:
    const {username, password} = req.body;

    //chwilowe rozwiązanie
    if(username === "admin" && password === "admin") {
        req.session.role = "admin";
        req.session.username = "admin";

        res.redirect("/");
    }else{
        res.render("login-incorrect");
    }
})

router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if(err){
            console.log("blad podzczas wylogowania:", err);
        }
        res.redirect("/");
    });
})

//TEST
router.get("/admin", checkAdmin, (req, res) => {
    res.send("jestes administratorem");
});

module.exports = router;