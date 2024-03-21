const router = require('express').Router();
 

let User = require('../models/user.model');


router.route('/').get((req,res)=>{
//this is mongoose method to get list of all the users in the database
User.find()
.then(users=>res.json(users))
.catch(err => res.status(400).json("Error :"+ err));
});



 //add a user to the database
 router.route("/add").post((req,res) => {
    const username= req.body.username;
    const newUser = new User({username});
    newUser.save()
     .then(() => res.json("User added!"))
     .catch(err => res.status(400).json("Error: " + err));
 });






module.exports = router;
