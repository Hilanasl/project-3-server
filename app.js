require("dotenv").config();
require("./config/dbConfig");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const tripsRouter = require("./routes/trips");
//const authRouter = require("./routes/auth");
const authRouter = require("./routes/auth");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

// const isAuthenticated = require("./middlewares/jwt.middleware");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => res.send("server is running"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trips", tripsRouter);

// app.use("/trips", require('./routes/trips'))
//app.use("/", authRouter);

// app.use("/", usersRouter);
app.use("/api/auth", authRouter);

module.exports = app;
