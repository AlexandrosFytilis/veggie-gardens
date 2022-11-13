import { Request, Response } from "express";
import { client } from "../server";
import { v4 as uuidV4 } from "uuid";

export const addVegetable = async (request: Request, response: Response) => {
  const usersCollection = client.db("final_project").collection("users");

  const vegetable = request.body;

  const result = await usersCollection.updateOne(
    {
      email: request.params.email
    },
    {
      $push: { vegetables: {...vegetable, id: uuidV4(), datePlanted: null, amount: 1 }}
    }
  );

  if (result.matchedCount < 1) {
    response.status(404).send({status: 404, message: "User not found"});
  }

  if (result.modifiedCount !== 1) {
    response.status(500).send({status: 500, message: "An unknown error has occurred"});
  }

  response.status(201).send({status: 201, data: request.body});
};
