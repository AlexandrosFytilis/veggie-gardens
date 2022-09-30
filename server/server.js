const express = require('express')
const helmet = require("helmet")
const morgan = require("morgan")

const addUser = require("./handlers/addUser")
const getUsers = require("./handlers/getUsers")

const port = 8000

express()
  .use(helmet())
  .use(morgan("tiny"))
  .use(express.json())

  .post("/add-user", addUser)
  .get("/users", getUsers)

  .listen(port, () => {
  console.log(`Server launched on port ${port}`)
})