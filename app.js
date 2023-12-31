const express = require("express");
const app = express();

const connectDB = require("./db/connect");
require("dotenv").config();

const notFound = require("./middleware/notFound");
const tasks = require("./routes/tasks");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
