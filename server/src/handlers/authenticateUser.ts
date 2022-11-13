import { Request, Response } from "express";
import { google } from "googleapis";

export const authenticateUser = async (_: Request, response: Response) => {
  const { CLIENT_ID, CLIENT_SECRET } = process.env;

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    "http://localhost:8000/oauth/redirect"
  );

  const scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile"
  ];

  const authorizationUrl = oauth2Client.generateAuthUrl({
    scope: scopes
  });

  response.redirect(authorizationUrl);
};
