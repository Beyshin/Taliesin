
const comicsData = require("../data/comics.js");

exports.getAllComics = async (req, res) => {
    res.render('comics/list', {comics: comicsData});
}

exports.getComicById = async (req, res) => {
    const id = parseInt(req.params.id);
    const comic = comicsData.find(c => c.id === id);
    if(!comic) {
        return res.status(404).render('comics/not-found');
    }
    res.render('comics/detail', {comic:comic});
}

exports.removeComicById = async (req, res) => {
    const id = parseInt(req.params.id);
    const comic = comicsData.find(c => c.id === id);
    if(!comic) {
        return res.status(404);
    }

    const index = comicsData.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).send("Nie znaleziono komiksu");
    }

    comicsData.splice(index, 1);
    return res.status(200).send("Komiks usunięty");
}

exports.getComicsByCharacter = async (req, res) => {
    const comics = comicsData.find(c => c.id === req.params.characterId);
}