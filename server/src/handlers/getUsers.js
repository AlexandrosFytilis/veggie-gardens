import { MongoClient } from "mongodb";

const { MONGO_URI } = process.env;

export const getUsers = async (request, response) => {
  const client = new MongoClient(MONGO_URI);

  await client.connect();

  const users = await client.db("final_project").collection("users").find().toArray();

  if (users.length !== 0) {
    response.status(200).send({
      status: 200,
      data: users
    });
  } else {
    response.sendStatus(404);
  }

  client.close();
};
