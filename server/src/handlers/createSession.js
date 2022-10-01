import { client } from "../server.js";

export const createSession = async (request, response) => {
  const usersCollection = client.db("final_project").collection("users");

  const { email, password } = request.body;

  if (!email || !password) {
    response.status(400).send({message: "missing input"});
    return;
  }

  const user = await usersCollection.findOne({ email, password });

  if (user === null) {
    response.status(401).send({message: "Incorrect email or password."});
    return;
  }
  
  delete user.password;

  response.status(200).send({status: 200, data: user});
};
