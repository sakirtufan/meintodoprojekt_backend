const express = require('express')

const router = express.Router();

//  /todos

router.get('/', (req, res) => {
  res.send("Todos Home Page");
})


router.get("/delete", (req, res) => {
  res.send("Todos Delete Page");
})

module.exports = router;