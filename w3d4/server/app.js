const express = require("express"); // Requires Express Framework (Routing / Server)
const path = require("path"); // Requires Path (Multiple OS path support)
const logger = require("morgan"); // Require Morgan (Logs the requests received)
const cookieParser = require("cookie-parser"); // Require Cookie Parser (Parse string to cookie)
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

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

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: bcrypt.hashSync("hydrogen", salt),
  secret: "Actually prefers biology over chemistry",
};

const user2 = {
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  password: bcrypt.hashSync("rosa", salt),
  secret: "Doesn't actually drive stick",
};

const userDatabaseIsh = {
  "periodic@table.com": user1,
  "pontiac@bandit.com": user2,
};

// find the user, check the password and then return the user obj!
// If it goes wrong, we want to know why
// {err:"", user:""}
const authenticateUser = (email, password) => {
  const currentUser = userDatabaseIsh[email];

  if (!currentUser) {
    // Eject clauses
    return { err: "No valid user :(", user: null };
  }

  if (currentUser.password !== password) {
    // Eject clauses
    return { err: "Password invalid :(", user: null };
  }

  return { err: null, user: currentUser };
};

const fetchUserByEmail = (email) => {
  const currentUser = userDatabaseIsh[email];

  if (!currentUser) {
    return { err: "Invalid email", user: null };
  }

  return { err: null, user: currentUser };
};

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/api/users", (req, res) => {
  res.json(userDatabaseIsh);
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

app.get("/secret", (req, res) => {
  // const email = req.cookies.email
  // const { email } = req.cookies;
  const { email } = req.session;
  const { err, user } = fetchUserByEmail(email);

  if (err) {
    console.log(err);
    return res.redirect("/");
  }

  const templateVars = { user };

  res.render("secret", templateVars);
});

module.exports = app;
