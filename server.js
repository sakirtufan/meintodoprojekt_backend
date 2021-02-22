const express = require('express')
const dotenv = require('dotenv')
const routes = require('./routes/index')
const connectDatabase = require('./helpers/database/connectDatabase')



// Enviroment Variables
dotenv.config({
  path : "./config/env/config.env"
})

// MongoDb Connection
connectDatabase();



const app = express();


const PORT = process.env.PORT;


// Routes Middleware
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
})