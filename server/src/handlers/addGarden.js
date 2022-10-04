import { client } from "../server.js";
import { v4 as uuidv4 } from "uuid";

export const addGarden = async (request, response) => {
  const usersCollection = client.db("final_project").collection("gardens");

  const generatedGardenId = uuidv4();

  if (await usersCollection.findOne({garden_id: generatedGardenId}) !== null) {
    response.status(409).send({data: generatedGardenId, message: "garden creation issue"});
    return;
  }

  await usersCollection.insertOne({garden_id: generatedGardenId, vegetables: []});

  response.status(201).send({status: 201, data: generatedGardenId});
};
