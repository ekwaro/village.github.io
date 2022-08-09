import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import * as routes from './routess.mjs';
import cors from 'cors'
import nodemailer from 'nodemailer'
import middle from './middleware.mjs'
  
import 'dotenv/config' 


const mongodburl = process.env.DATABASE_URL
mongoose.connect(mongodburl)
 
const database = mongoose.connection

database.on('error', err=>console.log(err)
)

database.once('connectd', ()=> console.log('Database connected'))  

const app = express();
app.use(cors({origin:true, credentials:true}));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api', routes.router)
app.use(middle.decodeToken)

app.listen(5000, ()=>{
    console.log(`Server is up and listening on port ${5000}`);
})

