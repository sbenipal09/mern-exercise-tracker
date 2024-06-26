const express = require('express');
const cors = require('cors');
 
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port  = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
    );
const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB database connected!"));

// API routes
const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/users');
app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);










app.listen(port, () => console.log(`Server started on ${port}`));

 
app.get('/', (req, res  ) => {
    res.send({msg: "Working"});
})

 