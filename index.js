const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const comics = require("./routes/comics");

app.set("view engine", "pug");
app.use(express.static("public"));
app.set("views", "./views");

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use('/comics', comics)

app.listen(port, () => {
    console.log("Taliesin is running on port " + port);
})

