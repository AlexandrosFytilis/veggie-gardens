import { google } from "googleapis";
import { client } from "../server.js";

export const getAccessToken = async (req, res) => {
  const { error, code } = req.query;
  const { CLIENT_ID, CLIENT_SECRET } = process.env;

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    "http://localhost:8000/oauth/redirect"
  );

  if (error) {
    res.redirect("http://localhost:3000/login");
    return;
  }

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  const { email, sub: google_id } = await oauth2Client.getTokenInfo(tokens.access_token);
  
  const usersCollection = client.db("final_project").collection("users");

  const existingUser = await usersCollection.findOne({ email, google_id });
  if (!existingUser) {
    const username = email.split("@")[0];

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

  res.redirect(`http://localhost:3000/oauth/redirect?access_token=${tokens.access_token}`);
};
