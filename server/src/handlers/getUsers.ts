import { Request, Response } from "express";
import { client } from "../server";

export const getUsers = async (_: Request, response: Response) => {
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
