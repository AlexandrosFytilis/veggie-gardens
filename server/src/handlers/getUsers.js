import { client } from "../server.js";

export const getUsers = async (request, response) => {
  const users = await client.db("final_project").collection("users").find().toArray();

  if (users.length !== 0) {
    response.status(200).send({
      status: 200,
      data: users
    });
  } else {
    response.sendStatus(404);
  }
};
