import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { addUser } from "./handlers/addUser.js";
import { getUser } from "./handlers/getUser.js";
import { getUsers } from "./handlers/getUsers.js";
import { MongoClient } from "mongodb";
import { createSession } from "./handlers/createSession.js";
import dotenv from "dotenv";
import { addVegetable } from "./handlers/addVegetable.js";
import { deleteVegetable } from "./handlers/deleteVegetable.js";
import { updateVegetable } from "./handlers/updateVegetable.js";


const PORT = 8000;
dotenv.config();
const { MONGO_URI } = process.env;

export const client = new MongoClient(MONGO_URI);

client.connect()
  .then(() => {
    express()
      .use(helmet())
      .use(morgan("tiny"))
      .use(express.json())

      .post("/users", addUser)
      .get("/users", getUsers)
      .get("/users/:email", getUser)
      .post("/sessions", createSession)
      .post("/users/:email/vegetables", addVegetable)
      .delete("/users/:email/vegetables/:id", deleteVegetable)
      .put("/users/:email/vegetables/:id", updateVegetable)

      .listen(PORT, () => {
        console.log(`Server launched on port ${PORT}`);
      });
  });
