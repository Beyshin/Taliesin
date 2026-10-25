const controller = require("../controllers/charactersController")
const express = require('express');

const router = express.Router();

router.get("/", controller.getAllCharacters);
router.get("/:id", controller.getCharacterById);

module.exports = router;