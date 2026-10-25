const express = require('express');
const router = express.Router();
const controller = require('../controllers/comicsController');
const middleware = require('../middlewares/auth');
const {checkAdmin} = require("../middlewares/auth");


router.get('/', controller.getAllComics);
router.get('/:id', middleware.userData ,controller.getComicById);
router.delete("/delete/:id", checkAdmin ,controller.removeComicById);


module.exports = router;