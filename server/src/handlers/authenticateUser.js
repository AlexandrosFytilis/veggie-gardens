import { google } from "googleapis";

export const authenticateUser = async (_, res) => {
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

  res.writeHead(301, {"Location": authorizationUrl});
};
