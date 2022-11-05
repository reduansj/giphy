const { get } = require("http");
const { model } = require("mongoose");
const Gif = require("../models/gif-model");

const getGif = async (req, res) => {
  try {
    const gifs = await Gif.find();
    // const gifs = await Gif.find().sort({ $natural: -1 }).limit(5);
    res.status(200).json(gifs);

    // res.status(200).json({ message: "get new gif" });
  } catch (error) {}
};

const getGifById = async (req, res) => {
  try {
    const gif = await Gif.findById(req.params.id);
    res.status(200).send(gif);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET GIf BY GENRE
const getGifsByGenre = async (req, res) => {
  const { genre } = req.params;
  try {
    const gif = await Gif.find({ Genre: genre });
    res.status(200).send(gif);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

const createGif = async (req, res) => {
  const { Url, Title, Genre } = req.body;

  try {
    if (!Url || !Title || !Genre) {
      res.status(400).send("Something went wrong try again!!");
    } else {
      const gif = await Gif.create({
        Url,
        Title,
        Genre,
      });
      res.status(200).send({ message: "Gif uploaded successfully" });
    }
  } catch (error) {
    res.status(400).send("Something went wrong try again!!" + error);
  }
};

const updateGif = async (req, res) => {
  const { Url, Title, Genre } = req.body;

  try {
    const gif = await Gif.findByIdAndUpdate(req.params.id, {
      Url,
      Title,
      Genre,
    });
    res.status(200).send("Gif updated");
  } catch (error) {
    res.status(504).send({ errorMsg: "Could not update gif", error });
  }
};

const deleteGif = async (req, res) => {
  try {
    const gif = await Gif.findByIdAndRemove(req.params.id);
    res.status(200).send("Gif deleted");
  } catch (error) {
    res.status(504).send({ errorMsg: "Could not remove gif", error });
  }
};
module.exports = {
  getGif: getGif,
  getGifById: getGifById,
  getGifsByGenre: getGifsByGenre,
  createGif: createGif,
  updateGif: updateGif,
  deleteGif: deleteGif,
};
