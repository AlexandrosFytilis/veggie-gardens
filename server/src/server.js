import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { addUser } from "./handlers/addUser.js";
import { getUser } from "./handlers/getUser.js";
import { getUsers } from "./handlers/getUsers.js";

const port = 8000;

express()
  .use(helmet())
  .use(morgan("tiny"))
  .use(express.json())

  .post("/users", addUser)
  .get("/users", getUsers)
  .get("/users/:email", getUser)
  .post("/sessions")

  .listen(port, () => {
    console.log(`Server launched on port ${port}`);
  });
