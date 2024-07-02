import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './DB/connectDB.js';

const app = express();
app.use(express.json());



app.get('/api/hello', (req,res) =>{
    const {visitor_name} = req.query;
    const client_ip = req.ip;
    const location = 'New York';
    const temperature = 11;

    const greeting = `Hello, ${visitor_name}! The temperature is ${temperature} degrees Celcius in New York`;
    res.json({client_ip, location, greeting });
});

const start = async () => {
   try{
    connectDB()
    app.listen(process.env.PORT, console.log(`Server is listening on ${process.env.PORT}`))
   }catch (error){
    console.log(error)
   }
}
start();