const express = require("express");
const session = require('express-session');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const {userData, checkAdmin} = require("./middlewares/auth");

const comics = require("./routes/comics");
const characters = require("./routes/characters");
const home = require("./routes/home");
const admin = require("./routes/admin");

//TODO: zmienic na produkcji na secure, httpOnly, dać age i sameSite opcje
app.use(session({
    secret: 'projekt_pcz_pc',
    resave: false,
    saveUninitialized: false
}));

app.use(userData);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/output.css', (req, res) => {
    res.type('text/css');
    res.sendFile(path.join(__dirname, 'public', 'output.css'));
});

app.use("/", home);
app.use('/comics', comics);
app.use('/characters', characters);
app.use('/admin', checkAdmin, admin);

app.listen(port, () => {
    console.log("Taliesin is running on port " + port);
})

module.exports = app;
