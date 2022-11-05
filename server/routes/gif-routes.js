const express = require("express");

const gifController = require("../controllers/gif-controller");

const router = express.Router();

//!CRUD
router.get("/", gifController.getGif);
router.get("/gif/:id", gifController.getGifById);
router.get("/genre/:genre", gifController.getGifsByGenre);
router.post("/", gifController.createGif);
router.put("/:id", gifController.updateGif);
router.delete("/:id", gifController.deleteGif);

module.exports = router;
