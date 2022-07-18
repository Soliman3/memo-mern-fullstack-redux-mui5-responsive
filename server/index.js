import bodyParser from "body-parser"; // for enabling sending post request
import cors from "cors"; // for handling cross origin requests
import express from "express"; // for intialize server and routing
import mongoose from "mongoose"; // for intialize noSQL database to crease models for posts
import postRouters from './routes/posts.js'; // import routers

// intialize the server
const app = express();

app.use('/posts', postRouters);
app.use(bodyParser.json({ limit: '30mb', extended: true }));  // set limit as larger images will be included
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


// connecting server with database mongoose (cloud atlas version)

const CONNECTION_URL = 'mongodb+srv://xxxxxx:xxxxxx@cluster0.2rpt4.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology: true})
    // if connection to db is successful
    .then(()=> app.listen(PORT, ()=> console.log(`server running successfully on port ${PORT}`)))
    // if connection to db is not successful
    .catch((error)=> console.log(error.message) );

//mongoose.set('useFindAndModify', false); // to handle error in db
