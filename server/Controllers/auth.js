const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const list = require("../database/admin.json");

// REGISTER NEW USER
const register = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }

  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newUser = new User({ firstname, lastname, email, password });
    await newUser.save();

    res.status(201).json({
      message: `${email} was registered successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Please try again later" });
  }
};

// LOGIN USER
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExist = await User.findOne({ email });

    // comparing given password with hashed password
    const comparePassword = await bcrypt.compare(password, userExist.password);

    if (!userExist || !comparePassword) {
      return res.status(400).json({ message: "Email or Password incorrect" });
    } else {
      // generate a token
      const token = jwt.sign(
        {
          _id: userExist._id,
          email: userExist.email,
          firstname: userExist.firstname,
          lastname: userExist.lastname,
          role: userExist.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "6h" }
      );

      res.status(200).json({
        message: `Welcome ${userExist.firstname}`,
        token,
        user: {
          firstname: userExist.firstname,
          lastname: userExist.lastname,
          email: userExist.email,
          role: userExist.role,
          password: password,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error occurred try again later",
      error: error.message,
    });
  }
};

const admin = async (req, res) => {
  try {
    await User.create(list);
    res.status(201).json({
      message: "User successfully created",
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { register, login, admin };
