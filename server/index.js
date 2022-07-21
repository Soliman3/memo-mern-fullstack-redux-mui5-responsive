//import bodyParser from "body-parser"; // for enabling sending post request
import cors from "cors"; // for handling cross origin requests
import express, { Router } from "express"; // for intialize server and routing
import mongoose from "mongoose"; // for intialize noSQL database to crease models for posts
import router from './routes/posts.js'; // import routers

// intialize the server
const app = express();


app.use(express.json({ limit: "30mb" }));  // set limit as larger images will be included
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use('/posts', router);


// connecting server with database mongoose (cloud atlas version)

const CONNECTION_URL = 'xxxxxxxxxxxxxxxxxxxx';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology: true})
    // if connection to db is successful
    .then(()=> app.listen(PORT, ()=> console.log(`server running successfully on port ${PORT}`)))
    // if connection to db is not successful
    .catch((error)=> console.log(error.message) );

//mongoose.set('useFindAndModify', false); // to handle error in db
