import { client } from "../server.js";

export const addVegetable = async (request, response) => {
  const usersCollection = client.db("final_project").collection("users");

  const vegetable = request.body;

  const result = await usersCollection.updateOne(
    {
      email: request.params.email
    },
    {
      $push: { vegetables: vegetable }
    }
  );

  if (result.matchedCount < 1) {
    response.status(404).send({status: 404, message: "User not found"});
  }

  if (result.modifiedCount !== 1) {
    response.status(500).send({status: 500, message: "An unknown error has occurred"});
  }

  response.status(201).send({status: 201, data: request.body});
};
