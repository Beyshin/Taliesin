
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


// {
//     id: 3,
//         title: "The Amazing Spider-Man: Ostatnie łowy Kravena",
//     issueNumber: 293,
//     publisher: "Marvel Comics",
//     releaseYear: 1987,
//     creators: {
//     writer: "J.M. DeMatteis",
//         artist: "Mike Zeck"
// },
//     characters: ["Spider-Man", "Kraven the Hunter", "Mary Jane Watson"],
//         description: "Kraven Łowca postanawia upolować swoją największą ofiarę – Spider-Mana, aby udowodnić, że jest od niego lepszy.",
//     cover: "https://comicvine.gamespot.com/a/uploads/scale_large/11159/111592040/9142436-img_2825.jpeg"
// },

exports.addComic = async (req, res) => {
    const data = req.body;

    const lastId = comicsData.at(-1).id;
    console.log(lastId);

    const newComic = {
        id: lastId + 1,
        title: data.title,
       issueNumber: data.issueNumber,
        publisher: data.publisher,
        releaseYear: data.releaseYear,
        creators: {
            writer: data.writer,
            artist: data.artist,
        },
        characters: data.characters,
        cover: data.cover,
        description: data.description,
    }

    comicsData.push(newComic);

    res.render('comics/detail', {comic:newComic});
}