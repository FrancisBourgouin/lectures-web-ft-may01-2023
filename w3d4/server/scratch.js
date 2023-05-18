const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

console.log(salt);

const password1 = "Hello1234";

const hashedPassword1 = bcrypt.hashSync(password1, salt);

const password2 = "WiggleWiggle";

const hashedPassword2 = bcrypt.hashSync(password2, salt);
const hashedPassword3 = bcrypt.hashSync(password2, salt);

console.log(hashedPassword1);
console.log(hashedPassword2);
console.log(hashedPassword3);

// hashedPassword3 === password2 will not working

const result = bcrypt.compareSync(password2, hashedPassword2);
console.log(result);
