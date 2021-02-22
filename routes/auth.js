const express = require('express')

const router = express.Router();

// /auth

router.get('/', (req, res) => {
  res.send("Authentication Home Page");
})


router.get("/register", (req, res) => {
  res.send("Authentication Register Page");
})

module.exports = router;