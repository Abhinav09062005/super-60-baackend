import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnect } from './config/dbConfig.js';

<<<<<<< HEAD
// npm i express dotenv cors mongoose
=======


>>>>>>> 93e235dac78ef9ee663077f8f7da562615084792
dotenv.config();

const app = express()

app.use(cors());
app.use(express.json())

app.get('/get-response', (req, res) => {
  res.send('Hello, Akash Raj!')
})


dbConnect();

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})