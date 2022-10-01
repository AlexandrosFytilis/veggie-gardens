import { client } from "../server.js";

export const addUser = async (request, response) => {
  const usersCollection = client.db("final_project").collection("users");

  const requestedEmail = request.body.email;

  if (await usersCollection.findOne({email: requestedEmail}) !== null) {
    response.status(409).send({data: requestedEmail, message: "email already used"});
    return;
  }

  await usersCollection.insertOne(request.body);

  response.status(201).send({status: 201, data: request.body});
};
