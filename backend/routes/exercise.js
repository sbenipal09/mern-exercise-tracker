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

//findById
router.route('/:id')
      .get( (req, res) => {
        Exercise.findById(req.params.id)
             .then(exercise => res.json(exercise))
             .catch(err => res.status(400).json("No workout with that ID") +  err);
      })

//findByIdAndDelete
 router.route('/:id').delete((req, res) => {
        Exercise.findByIdAndDelete(req.params.id)
        .then((exercise) => {
            if (!exercise) {
                return res.status(404).json("No exercise found with that ID");
            }
          res.json(`Deleted exercise ${req.params.id}`)}
        )
        .catch(err => res.status(400).json('Error'))
      })

//updateUsingId
router.route('/update/:id')
       .post((req,res)=>{   
        Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username= req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            //need to check if the date is updated or not
            exercise.date = req.body.date ? Date.parse(req.body.date) : exercise.date;
        
            exercise.save()
            .then(()=> res.json('Exercise has been updated!'))
            .catch(err => res.status(400).send('Update failed'));
        })
});



module.exports = router;
