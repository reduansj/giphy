const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const port = process.env.PORT;

connectDB();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));

app.use("/", require("./routes/gif-routes"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
