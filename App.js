import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import get_location from './get_location/location.js'
// import connectDB from './DB/connectDB.js';

const app = express();
app.use(express.json());



app.get("/api/hello", async (req,res) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.ip;
        const geo = await get_location(ip)
        const { visitor_name } = req.query
        res.json({
            client_ip: ip,
            location: geo.location.name,
            geeting: `Hello, ${visitor_name}!, the temperature is ${geo.current.temp_c} degrees in ${geo.location.name}`
        })
    } catch (error) {

        res.status(500).json({ message: "There seems to be an error" })
    }
})
app.listen(process.env.PORT, () => console.log("Server running"))