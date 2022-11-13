import { Request, Response } from "express";
import { client } from "../server";

export const getUser = async (request: Request, response: Response) => {
  const { email } = request.params;

  const usersCollection = client.db("final_project").collection("users");

  const user = await usersCollection.findOne({email: email});

  if (user !== null) {
    response.status(200).send({
      status: 200,
      data: user
    });
  } else {
    response.status(404).send({
      status: 404,
      message: "User not found"
    });
  }
};
