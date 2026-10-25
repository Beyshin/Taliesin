const express = require("express");
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

const {userData} = require("./middlewares/auth");

const comics = require("./routes/comics");
const characters = require("./routes/characters");
const home = require("./routes/home");

//TODO: zmienic na produkcji na secure, httpOnly, dać age i sameSite opcje
app.use(session({
    secret: 'projekt_pcz_pc',
    resave: false,
    saveUninitialized: false
}));

app.use(userData);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/", home);
app.use('/comics', comics);
app.use('/characters', characters);

app.listen(port, () => {
    console.log("Taliesin is running on port " + port);
})

