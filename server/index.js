
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/user.js";
import  dotenv from 'dotenv'
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config({path:"./.env"})
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.get("/",(req,res)=>{
  res.send("API RUNNING")
})
app.use('/posts', postRoutes);
app.use('/user',userRouter)

const PORT = process.env.PORT|| 5500;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);