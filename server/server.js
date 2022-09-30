const express = require('express')
const helmet = require("helmet")
const morgan = require("morgan")

const port = 8000

express()
  .use(helmet())
  .use(morgan("tiny"))

  .post("/users", addUser)
  

  .listen(port, () => {
  console.log(`Server launched on port ${port}`)
})