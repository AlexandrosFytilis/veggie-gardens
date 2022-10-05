import { client } from "../server.js";

export const deleteVegetable = async (request, response) => {
  const usersCollection = client.db("final_project").collection("users");

  const result = await usersCollection.updateOne(
    {
      email: request.params.email
    },
    { 
      $pull:  { vegetables: {id: request.params.id} }
    }
  );

  if (result.matchedCount < 1) {
    response.status(404).send({status: 404, message: "User not found"});
    return;
  }

  if (result.modifiedCount !== 1) {
    response.status(500).send({status: 500, message: "An unknown error has occurred"});
    return;
  }

  response.status(201).send({status: 201, message: "Vegetable deleted"});
};
