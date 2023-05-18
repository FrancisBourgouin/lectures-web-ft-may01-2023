const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: bcrypt.hashSync(process.env.PASSWORD1, salt),
  secret: "Actually prefers biology over chemistry",
};

const user2 = {
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  password: bcrypt.hashSync(process.env.PASSWORD2, salt),
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

  if (!bcrypt.compareSync(password, currentUser.password)) {
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

module.exports = { userDatabaseIsh, fetchUserByEmail, authenticateUser };
