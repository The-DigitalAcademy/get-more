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

UserSchema.pre("save", async function (next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = Mongoose.model("user", UserSchema)
module.exports = User
