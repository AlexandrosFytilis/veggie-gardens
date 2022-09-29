const express = require('express')
const helmet = require("helmet")
const morgan = require("morgan")

const port = 8000

express()
  .use(helmet())
  .use(morgan("tiny"))

  .get("/hello", (req, res) => {
    res.status(200).json({status: 200, message: "Hi!"})
  })

  .listen(port, () => {
  console.log(`Server launched on port ${port}`)
})