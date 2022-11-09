import { client } from "../server.js";
import bcrypt from "bcrypt";

export const createSession = async (request, response) => {
  const usersCollection = client.db("final_project").collection("users");

  const { email, password, access_token } = request.body;

  if (access_token) {
    const user = await usersCollection.findOne({ access_token });
    if (user) {
      response.status(200).send({status: 200, data: user});
      return;
    }
  }

  if (!email || !password) {
    response.status(400).send({message: "missing input"});
    return;
  }

  const user = await usersCollection.findOne({ email });

  if (user === null) {
    response.status(401).send({message: "Incorrect email or password."});
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  console.log(password);
  console.log(user.password);
  console.log(isMatch);

  if (!isMatch) {
    response.status(401).send({message: "Incorrect email or password."});
    return;
  }
  
  delete user.password;

  response.status(200).send({status: 200, data: user});
};
