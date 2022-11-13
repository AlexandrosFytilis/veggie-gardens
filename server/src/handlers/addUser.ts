import { Request, Response } from "express";
import { client } from "../server";
import bcrypt from "bcrypt";

export const addUser = async (request: Request, response: Response) => {
  const usersCollection = client.db("final_project").collection("users");

  const requestedEmail = request.body.email;
  const hashedPassword = await bcrypt.hash(request.body.password, 10);

  if (!requestedEmail) {
    response.status(400).send({data: requestedEmail, message: "Email not provided"});
  }

  const existingUser = await usersCollection.findOne({email: requestedEmail});
  if (existingUser) {
    response.status(409).send({data: requestedEmail, message: "email already used"});
    return;
  }

  await usersCollection.insertOne({...request.body, password: hashedPassword});

  response.status(201).send({status: 201, data: request.body});
};
