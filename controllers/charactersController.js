const characters = require("../data/characters.js")

exports.getAllCharacters = async (req, res) => {
    return res.render("characters/list", {characters: characters});
}

exports.getCharacterById = async (req, res) => {
    const id = parseInt(req.params.id);
    const char = characters.find(c => c.id === id);
    console.log(char);
    return res.render("characters/detail", {char: char});
}