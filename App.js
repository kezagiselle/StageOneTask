import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './DB/connectDB.js';
import Router from './Routes/index.js';

const app = express();
app.use(express.json());
app.use('/api/StageOneTask', Router);

const start = async () => {
   try{
    connectDB()
    app.listen(process.env.PORT, console.log(`Server is listening on ${process.env.PORT}`))
   }catch (error){
    console.log(error)
   }
}
start();