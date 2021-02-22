const express = require('express')
const dotenv = require('dotenv')

// Enviroment Variables
dotenv.config({
  path : "./config/env/config.env"
})


const app = express();


const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send("Hello Todo_App Api")
})

app.listen(PORT, () => {
  console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
})