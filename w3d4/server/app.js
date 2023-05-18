require("dotenv").config();
const express = require("express"); // Requires Express Framework (Routing / Server)
const path = require("path"); // Requires Path (Multiple OS path support)
const logger = require("morgan"); // Require Morgan (Logs the requests received)
const cookieParser = require("cookie-parser"); // Require Cookie Parser (Parse string to cookie)
const cookieSession = require("cookie-session");
const {
  userDatabaseIsh,
  fetchUserByEmail,
  authenticateUser,
} = require("./data/userData");

const app = express(); // Create an express server and reference with app
// view engine setup
app.set("views", path.join(__dirname, "views")); // Where the views are
app.set("view engine", "ejs"); // The rendering engine will be EJS

// Middlewares
app.use(logger("dev")); // Logs, always triggered
app.use(express.json()); // Parse incoming body (POST / PUT)
app.use(express.urlencoded({ extended: false })); // Parse incoming body (POST / PUT)
app.use(cookieParser()); // Parse cookie values, always triggered
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
app.use(
  cookieSession({
    name: "session",
    keys: ["I like potatoes", "Pollo is bueno"],
  })
);

// What's the answer to the most existential question?
// 42

app.use((req, res, next) => {
  const { email } = req.session;
  const { err } = fetchUserByEmail(email);
  const whiteList = ["/", "/login"];

  if (err && !whiteList.includes(req.url)) {
    console.log(err);
    return res.redirect("/");
  }

  return next();
});

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/something/:some_params"); // some_params will be a key in req.params

app.post("/login", (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  const { email, password } = req.body;
  // Extract the keys called password and email, and create variable with that name, and the value will the value in the object

  const { err, user } = authenticateUser(email, password);

  if (err) {
    return res.json(err);
  }

  // res.cookie("email", user.email);
  req.session.email = user.email;

  return res.redirect("/secret");
});

app.get("/api/users", (req, res) => {
  return res.json(userDatabaseIsh);
});

app.get("/secret", (req, res) => {
  const { email } = req.session;
  const { user } = fetchUserByEmail(email);

  const templateVars = { user };

  res.render("secret", templateVars);
});

module.exports = app;
