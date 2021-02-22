const express = require('express')
const todo = require('./todos')
const auth = require('./auth')


const router = express.Router();


// /api
router.use("/todos", todo)
router.use("/auth", auth)



module.exports = router;