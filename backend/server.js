import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import { connectDB } from './config/db.js';
import photoRouter from './Routes/addRoute.js';
//config
const app = express();
const port = 5001;

//Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//DB connection
connectDB();

//api endpoints
app.use("/api/photo",photoRouter);
app.use('/uploads', express.static('uploads'));

app.get('/',(req,res)=>{
    res.send("API Working");
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
});


