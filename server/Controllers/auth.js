const User = require("../model/user");

// auth.js
exports.signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }

  try {
    await User.create({
      firstname,
      lastname,
      email,
      password,
    }).then((user) =>
      res.status(200).json({
        message: "User successfully created",
        user,
      }) 
    );console.log(User)
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "User not successful created",
    });
  }
};

// auth.js
// exports.login = async (req, res, next) => {
//   const {  firstname, password } = req.body
//   // Check if username and password is provided
//   if (! firstname || !password) {
//     return res.status(400).json({
//       message: "Username or Password not present",
//     })
//   }
// }


exports.signin = async (req, res, next) => {
  const { firstname, password } = req.body;
  try {
    const user = await User.findOne({ firstname, password });
    if (!firstname) {
      res.status(401).json({
        message: "Signin not successful",
        error: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Signin successful",
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};
