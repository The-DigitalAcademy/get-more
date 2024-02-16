const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const list = require("../Database/admin.json");

// register function
exports.signup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    res.status(400).json({
      message: "User exists",
    });
  } else {
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
      );
    } catch (err) {
      res.status(401).json({
        message: "User not successful created",
        error: err,
      });
    }
  }
};

// login function
exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  // Check if username and password is provided
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      // comparing given password with hashed password
      bcrypt.compare(password, user.password).then(function (result) {
        // generate a token
        const token = jwt.sign(
          {
            _id: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            role: user.role,
          },
          process.env.JWT_SECRET,
          { expiresIn: "6h" }
        );

        result
          ? res.status(200).json({
              message: "Login successful",
              user,
              token,
            })
          : res.status(400).json({ message: "Login not succesful" });
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

// adding admin
exports.addAdmin = async (req, res) => {
  try {
    await User.create(list);
    res.status(201).json({
      message: "User successfully created",
    });
  } catch (error) {
    console.log(error.message);
  }
};