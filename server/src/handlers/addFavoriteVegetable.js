import { client } from "../server.js";

export const addFavoriteVegetable = async (request, response) => {
  const usersCollection = client.db("final_project").collection("users");

  const email = request.params.email;

  if (!email) {
    response.status(400).send({data: email, message: "Email not provided"});
  }

  const vegetableName = request.body.name;
  const user = await usersCollection.findOne({email});

  if (!user) {
    response.status(404).send({data: email, message: "user not found"});
    return;
  }

  if (user.favoriteVegetables.includes(vegetableName)) {
    response.status(409).send({data: vegetableName, message: "vegetable already in favorites"});
    return;
  }

  if (user.favoriteVegetables.length >= 5) {
    response.status(409).send({data: vegetableName, message: "Reached max favorite vegetables (5 max)"});
    return;
  }

  const result = await usersCollection.updateOne(
    user,
    { 
      $push: { favoriteVegetables: vegetableName }
    }
  );

  if (result.matchedCount < 1) {
    response.status(404).send({data: user, message: "User not found"});
    return;
  }

  if (result.modifiedCount !== 1) {
    response.status(500).send({data: request.body, message: "An unknown error has occurred"});
    return;
  }

  response.status(201).send({data: request.body});
};
