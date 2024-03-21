const router = require('express').Router();
 
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
            .then(exercises=>res.json(exercises))
            .catch(err=>res.status(400).json("Error: " + err));
            });


    //add exercises
    router.route("/add").post((req, res)=>{
        
        
        
        const exercise = new Exercise({
            username : req.body.username,   
            description : req.body.description,
            duration: Number(req.body.duration),  
            date: Date.parse(req.body.date)
          })
    
          exercise.save()
              .then(()=>{
                  res.json("Exercise added successfully!");
              }).catch((error)=> {
                console.log("ERROR! ", error);
                res.status(400).json("Unable to add exercise.");
            });
    });






module.exports = router;
