const express = require("express")

const User = require("../models/user")

const router = express.Router()


router.post('/user' , async(req , res) => {
    const user =  new User(req.body);
    await user.save()
    res.send(user)
})

router.get('/user' , async(req , res ) => {
      const user = await User.find()
      res.send(user)
} )
router.get('/user/:id' , async(req , res ) => {
    const user = await User.findById(req.params.id)
    res.send(user)
} )
router.delete('/user/:id' , async(req , res ) => {
    const user = await User.findByIdAndRemove(req.params.id)
    res.send("user deleted")
} )
module.exports = router ;