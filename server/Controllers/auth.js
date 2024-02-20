const User = require('../model/user')

// REGISTER NEW USER
const register = async (req, res) => {
  const { firstname, lastname, email, password } = req.body


  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {

    const userExist = await User.findOne({ email })

    if (userExist) {
      return res.status(400).json({ message: 'Email already in use' })
    }

    const newUser = new User({ firstname, lastname, email, password })
    await newUser.save()

    res.status(201).json({
      message: `${email} was registered successfully`
    })


  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Please try again later' })
  }
}



// LOGIN USER
const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const userExist = await User.findOne({ email })

    if (!userExist) {
      return res.status(400).json({ message: 'Email or Password incorrect' })
    }



    if (userExist.password !== password) {
      return res.status(400).json({ message: 'Email or Password incorrect' })
    }

    res.status(200).json({
      message: `Welcome ${userExist.firstname}`,
      token: '',
      user: {
        firstname: userExist.firstname,
        lastname: userExist.lastname,
        email: userExist.email,
        role: userExist.role
      }
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Please try again later' })
  }
}

module.exports = { register, login }