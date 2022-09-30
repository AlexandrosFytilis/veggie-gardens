import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { addUser } from "./handlers/addUser.js";
import { getUsers } from "./handlers/getUsers.js";

const port = 8000;

express()
  .use(helmet())
  .use(morgan("tiny"))
  .use(express.json())

  .post("/add-user", addUser)
  .get("/users", getUsers)

  .listen(port, () => {
    console.log(`Server launched on port ${port}`);
  });
