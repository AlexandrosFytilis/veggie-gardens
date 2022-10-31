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
import { updateUser } from "./handlers/updateUser.js";
import { addFavoriteVegetable } from "./handlers/addFavoriteVegetable.js";
import { deleteFavoriteVegetable } from "./handlers/deleteFavoriteVegetable.js";
import { authenticateUser } from "./handlers/authenticateUser.js";
import { getAccessToken } from "./handlers/getAccessToken.js";


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

      .get("/oauth", authenticateUser)
      .get("/oauth/redirect", getAccessToken)
      .post("/users", addUser)
      .get("/users", getUsers)
      .get("/users/:email", getUser)
      .put("/users/:email", updateUser)
      .post("/sessions", createSession)
      .post("/users/:email/vegetables", addVegetable)
      .delete("/users/:email/vegetables/:id", deleteVegetable)
      .post("/users/:email/favorite-vegetables", addFavoriteVegetable)
      .delete("/users/:email/favorite-vegetables", deleteFavoriteVegetable)
      .put("/users/:email/vegetables/:id", updateVegetable)

      .listen(PORT, () => {
        console.log(`Server launched on port ${PORT}`);
      });
  });
