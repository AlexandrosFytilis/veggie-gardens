const { MongoClient } = require("mongodb")

require("dotenv").config()
const { MONGO_URI } = process.env

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options)

  await client.connect()

  const usersCollection = client.db("final_project").collection("users")

  const requestedEmail = req.body.email

  if (await usersCollection.findOne({email: requestedEmail}) !== null) {
    res.status(400).send({data: requestedEmail, message: "email already used"})
    return
  }

  await usersCollection.insertOne(req.body)

  res.status(201).send({data: req.body})

  client.close()
}

module.exports = addUser