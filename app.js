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

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
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

// app.use("/api/index", indexRouter);  <= ALIX : What I would do
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trips", tripsRouter);

// app.use("/trips", require('./routes/trips'))
//app.use("/", authRouter);

// ALIX ideas :
// app.use("/api", indexRouter);
// app.use("/api", require("./routes/index"))
// app.use("/api/trips", require(indexRouter))
// app.use("/api/trips", require(tripRouter)) and create a trip router

module.exports = app;
