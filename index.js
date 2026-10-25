const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const comics = require("./routes/comics");
const characters = require("./routes/characters");
const home = require("./routes/home");

app.set("view engine", "pug");
app.use(express.static("public"));
app.set("views", "./views");

app.get("/", home);

app.use('/comics', comics);
app.use('/characters', characters);

app.listen(port, () => {
    console.log("Taliesin is running on port " + port);
})

