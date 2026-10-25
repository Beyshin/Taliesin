const express = require('express');
const router = express.Router();
const controller = require('../controllers/comicsController');
const middleware = require('../middlewares/auth');
router.get('/', controller.getAllComics);

router.post('/', (req, res) => {
    res.send('Dodawanie nowego komiksu do bazy');
});


router.get('/:id', middleware.checkAdmin ,controller.getComicById);
router.delete("/delete/:id", controller.removeComicById);


module.exports = router;