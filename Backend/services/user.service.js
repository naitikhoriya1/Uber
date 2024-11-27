const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  if (!firstName || !email || !password) {
    throw new Error("Missing required fields");
  }
  const user = userModel.create({
    fullname: {
      firstname: firstName,
      lastname: lastName,
    },
    email,
    password,
  });
  return user;
};
