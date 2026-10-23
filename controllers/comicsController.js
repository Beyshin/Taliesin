
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