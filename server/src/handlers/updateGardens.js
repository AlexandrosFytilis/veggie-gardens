import { client } from "../server.js";

export const updateGardens = async (request, response) => {
  const usersCollection = client.db("final_project").collection("users");

  const updatingUser = await usersCollection.findOne({ email: request.body.email });

  if (updatingUser === null) {
    response.status(404).send({ status: 404, message: "User not found" });
    return;
  }

  await usersCollection.updateOne(
    {
      email: request.body.email
    },
    {
      $set: { gardens: [request.body.garden_id] }
    }
  );

  response.status(201).send({ status: 201, data: updatingUser });
};
