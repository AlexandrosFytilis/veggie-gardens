import { MongoClient } from "mongodb";

const { MONGO_URI } = process.env;

export const getUser = async (request, response) => {
  const { email } = request.params;

  const client = new MongoClient(MONGO_URI);

  await client.connect();

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

  client.close();
};
