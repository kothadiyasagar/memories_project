import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"

import postRoutes from './routes/posts.js';
const app = express()

app.use(bodyParser.json({limit:"30mp",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mp",extended:true}))
app.use(cors())
const CONNECTION_URL = "mongodb+srv://sagar:sagar123@cluster0.dn7hj5y.mongodb.net/memoriesSocial_App?retryWrites=true&w=majority"
app.use('/posts', postRoutes)
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);