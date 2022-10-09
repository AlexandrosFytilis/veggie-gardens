import { client } from "../server.js";

export const deleteFavoriteVegetable = async (request, response) => {
  const usersCollection = client.db("final_project").collection("users");

  const requestedEmail = request.body.email;

  if (await usersCollection.findOne({email: requestedEmail}) !== null) {
    response.status(409).send({data: requestedEmail, message: "email not found"});
    return;
  }

  if (await usersCollection.findOne({favoriteVegetables: request.body.name}) === null) {
    response.status(409).send({data: request.body.name, message: "vegetable is not in favorites"});
    return;
  }

  const result = await usersCollection.updateOne(
    {
      email: request.params.email
    },
    { 
      $pull: { "favoriteVegetables": request.body.name }
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

  response.status(201).send({status: 201, data: request.body});
};
