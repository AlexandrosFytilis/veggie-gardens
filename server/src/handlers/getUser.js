import { client } from "../server.js";

export const getUser = async (request, response) => {
  const { email } = request.params;

  const usersCollection = client.db("final_project").collection("users");

  const user = await usersCollection.findOne({email: email});

  if (user !== null) {
    response.status(200).send({
      status: 200,
      data: user
    });
  } else {
    response.sendStatus(404);
  }
};
