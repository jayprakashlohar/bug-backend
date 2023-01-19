const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("express-async-errors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .send({ message: "welcome to trendy vibes testing Homepage API" });
});

app.use("/user", userRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("db is connected successfully");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server is listning on PORT${PORT}`);
});
