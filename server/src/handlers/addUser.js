import { client } from "../server.js";

export const addUser = async (request, response) => {
  const usersCollection = client.db("final_project").collection("users");

  const requestedEmail = request.body.email;

  if (!requestedEmail) {
    response.status(400).send({data: requestedEmail, message: "Email not provided"});
  }

  const existingUser = await usersCollection.findOne({email: requestedEmail});
  if (existingUser) {
    response.status(409).send({data: requestedEmail, message: "email already used"});
    return;
  }

  await usersCollection.insertOne(request.body);

  response.status(201).send({status: 201, data: request.body});
};
