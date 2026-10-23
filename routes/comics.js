const express = require('express');
const router = express.Router();
const controller = require('../controllers/comicsController');

router.get('/', controller.getAllComics);

router.post('/', (req, res) => {
    res.send('Dodawanie nowego komiksu do bazy');
});


router.get('/:id', controller.getComicById);

module.exports = router;