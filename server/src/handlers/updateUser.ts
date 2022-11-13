import { Request, Response } from "express";
import { client } from "../server";
import bcrypt from "bcrypt";

export const updateUser = async (request: Request, response: Response) => {
  const usersCollection = client.db("final_project").collection("users");
  const requestedChanges = request.body;

  if ("confirmPassword" in requestedChanges) {
    delete requestedChanges["confirmPassword"];
  }

  if ("password" in requestedChanges) {
    requestedChanges.password = await bcrypt.hash(request.body.password, 10);
  }

  const result = await usersCollection.updateOne(
    {
      email: request.params.email
    },
    { 
      $set: requestedChanges
    }
  );

  if (result.matchedCount < 1) {
    response.status(404).send({status: 404, message: "User not found"});
    return;
  }

  if (result.modifiedCount !== 1) {
    response.status(500).send({status: 500, message: "An unknown error has occurred"});
    return;
  }

  response.status(201).send({status: 201, message: "User updated"});
};
