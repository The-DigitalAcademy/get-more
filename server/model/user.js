const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new Mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  contactnumber: {
    type: String,
    unique: true,
  },
  alternativenumber: {
    type: String,
    unique: true,
  },
  streetaddress: {
    type: String,
    unique: true,
  },
  suburb: {
    type: String,
    unique: true,
  },
  city: {
    type: String,
    unique: true,
  },
  postalcode: {
    type: String,
    unique: true,
  },
  province: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    default: "customer",
  },
});

//hash password
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = Mongoose.model("User", UserSchema);
module.exports = User;
