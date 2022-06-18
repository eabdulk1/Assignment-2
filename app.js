const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index"); 
const contactRouter = require("./routes/contact");
const aboutRouter = require("./routes/about");
const servicesRouter = require("./routes/services");
const projectsRouter = require("./routes/projects"); //rout to nav 

const secureRouter = require("./routes/secure");
// const mongoose = require("mongoose");

main().catch((err) => console.log(err)); //connect to db >profile

async function main() {
  await mongoose.connect("mongodb://localhost:27017/profile");
}


const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/services", servicesRouter);
app.use("/projects", projectsRouter);

app.use("/secure", secureRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
