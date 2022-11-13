import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { addUser } from "./handlers/addUser";
import { getUser } from "./handlers/getUser";
import { getUsers } from "./handlers/getUsers";
import { MongoClient } from "mongodb";
import { createSession } from "./handlers/createSession";
import dotenv from "dotenv";
import { addVegetable } from "./handlers/addVegetable";
import { deleteVegetable } from "./handlers/deleteVegetable";
import { updateVegetable } from "./handlers/updateVegetable";
import { updateUser } from "./handlers/updateUser";
import { addFavoriteVegetable } from "./handlers/addFavoriteVegetable";
import { deleteFavoriteVegetable } from "./handlers/deleteFavoriteVegetable";
import { authenticateUser } from "./handlers/authenticateUser";
import { getAccessToken } from "./handlers/getAccessToken";


const PORT = 8000;
dotenv.config();
const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI");
}

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
