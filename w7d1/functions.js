const createUser = (firstName, lastName, email, password, description, isAdmin) => {
  const dateCreated = new Date();
  const id = Math.floor(Math.random() * 1000);

  const newUser = {
    id,
    firstName,
    lastName,
    email,
    password,
    description,
    isAdmin,
    dateCreated,
  };

  return newUser;
};

const bob = createUser(
  "Pequeno",
  "Pollo",
  "pock@pock.com",
  "1234",
  "It's a chicken",
  false
);

const jack = createUser("Jack", undefined, undefined, undefined, undefined, true);


const createUserButBetter = (formData) => {
  const dateCreated = new Date();
  const id = Math.floor(Math.random() * 1000);

  const newUser = {
    ...formData,
    id,
    dateCreated,
  };

  return newUser
}


createUserButBetter({firstName:"", lastName:""})

createUserButBetter({firstName:"Jack", isAdmin:true})

$.ajax({
  
})