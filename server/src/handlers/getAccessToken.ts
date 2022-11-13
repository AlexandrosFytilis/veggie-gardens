import { Request, Response } from "express";
import { google } from "googleapis";
import { client } from "../server";

export const getAccessToken = async (request: Request, response: Response) => {
  const { error, code } = request.query;
  const { CLIENT_ID, CLIENT_SECRET } = process.env;

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    "http://localhost:8000/oauth/redirect"
  );

  if (error || !code) {
    response.redirect("http://localhost:3000/login");
    return;
  }

  const { tokens } = await oauth2Client.getToken(code.toString());
  oauth2Client.setCredentials(tokens);

  if (!tokens.access_token) {
    response.redirect("http://localhost:3000/login");
    return;
  }

  const { email, sub: google_id } = await oauth2Client.getTokenInfo(tokens.access_token);
  
  const usersCollection = client.db("final_project").collection("users");

  const existingUser = await usersCollection.findOne({ email, google_id });
  if (!existingUser) {
    const username = email?.split("@")[0] ?? `User${Math.floor(Math.random() * 100000)}`;

    const newUser = {
      userName: username,
      email: email,
      google_id: google_id,
      lastWateringDay: null,
      favoriteVegetables: [],
      access_token: tokens.access_token
    };

    await usersCollection.insertOne(newUser);
  } else {
    await usersCollection.updateOne(
      { email, google_id },
      { $set: { access_token: tokens.access_token } }
    );
  }

  response.redirect(`http://localhost:3000/oauth/redirect?access_token=${tokens.access_token}`);
};
