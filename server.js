const express = require('express')
const dotenv = require('dotenv')
const routes = require('./routers/index')
const connectDatabase = require('./helpers/database/connectDatabase')
const customErrorHandler = require('./middlewares/errors/customErrorHandler')



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

// Error Handler
app.use(customErrorHandler);

app.listen(PORT, () => {
  console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
})