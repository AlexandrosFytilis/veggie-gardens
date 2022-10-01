import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_URI } = process.env;

export const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI);

  await client.connect();

  const usersCollection = client.db("final_project").collection("users");

  const requestedEmail = req.body.email;

  if (await usersCollection.findOne({email: requestedEmail}) !== null) {
    res.status(409).send({data: requestedEmail, message: "email already used"});
    return;
  }

  await usersCollection.insertOne(req.body);

  res.status(201).send({status: 201, data: req.body});

  client.close();
};
