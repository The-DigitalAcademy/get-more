const Mongoose = require("mongoose")

const UserSchema = new Mongoose.Schema({
  firstname: String,

  lastname: String,

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: String
})

const User = Mongoose.model("user", UserSchema)
module.exports = User
