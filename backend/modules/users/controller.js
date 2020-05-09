import User from './model'

export const createUser = async (req, res) => {
   const {name, image} = req.body;
   const newUser = new User({name, image});

   try {
      return res.status(201).json({user: await newUser.save()})
   } catch(e) {
      return res.status(e.status).json({error: true, message: "Error with user"})
   }
}

export const getAllUsers = async (req, res) => {
   try {
      return res.status(200).json({users: await User.find({})})
   } catch (err) {
      return res.status(e.status).json({error: true, message: "Error with user"})
   }
}