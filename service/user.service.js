const User = require("../schema/user.schema");
// user = {email: "", nickname: "", password: ""}
const createUser = async (user) => {
  try {
    const createdUser = await User.create(user);
    console.log(createdUser);
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (email, password) => {
  const user = await User.findOne({});
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    conosle.log("error", err);
    throw new Error(err);
  }
};
module.exports = {
  createUser,
  getUserByEmail,
};
