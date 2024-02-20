const User = require('../model/user')

// REGISTER NEW USER
const register = async(req, res) => {
  const {firstname, lastname, email, password} = req.body

  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({message: 'All fields are required'})
  }

  try {

    const newUser = new User({firstname, lastname, email, password})
    const user = await newUser.save()

    res.status(201).json(user)

    
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Please try again later'})
  }
}



// LOGIN USER
const login = async(req, res) => {
  const {email, password} = req.body



  if (!email || !password) {
    return res.status(400).json({message: 'All fields are required'})
  }

  

  try {
    const userExist = await User.findOne({email})

    if (!userExist) {
      return res.status(400).json({message: 'Email or Password incorrect'})
    }

    

    if (userExist.password !== password) {
      return res.status(400).json({message: 'Email or Password incorrect'})
    }

    res.status(201).json(userExist)
    
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Please try again later'})
  }
}

module.exports = {register, login}