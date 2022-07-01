const { CookieOptions, Request, Response } = require("express");
// const config = require("config");
// import jwt from "jsonwebtoken";
// const {
//   createSession,
//   findSessions,
//   updateSession,
// } = require("../service/session.service");
const {
  // findAndUpdateUser,
  getGoogleOAuthTokens,
  getGoogleUser,
  // validatePassword,
} = require("../services/auth.services");
// import { signJwt } from "../utils/jwt.utils";
// import log from "../utils/logger";

const accessTokenCookieOptions = {
  maxAge: 900000, // 15 mins
  httpOnly: true,
  domain: "localhost",
  path: "/",
  sameSite: "lax",
  secure: false,
};

const refreshTokenCookieOptions = {
  ...accessTokenCookieOptions,
  maxAge: 3.154e10, // 1 year
};

async function googleOauthHandler(req, res) {
  // get the code from qs
  const code = req.query.code;

  try {
    // get the id and access token with the code
    const { id_token, access_token } = await getGoogleOAuthTokens({ code });
    console.log({ id_token, access_token });

    // get user with tokens
    const googleUser = await getGoogleUser({ id_token, access_token });
    //jwt.decode(id_token);

    console.log({ googleUser });

    if (!googleUser.verified_email) {
      return res.status(403).send("Google account is not verified");
    }

    // upsert the user
    // const user = await findAndUpdateUser(
    //   {
    //     email: googleUser.email,
    //   },
    //   {
    //     email: googleUser.email,
    //     name: googleUser.name,
    //     picture: googleUser.picture,
    //   },
    //   {
    //     upsert: true,
    //     new: true,
    //   }
    // );

    // create a session
    // const session = await createSession(user._id, req.get("user-agent") || "");

    // create an access token

    // const accessToken = signJwt(
    //   { ...user.toJSON(), session: session._id },
    //   { expiresIn: config.get("accessTokenTtl") } // 15 minutes
    // );

    // // create a refresh token
    // const refreshToken = signJwt(
    //   { ...user.toJSON(), session: session._id },
    //   { expiresIn: config.get("refreshTokenTtl") } // 1 year
    // );

    // set cookies
    // res.cookie("accessToken", accessToken, accessTokenCookieOptions);

    // res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);

    // redirect back to client
    res.redirect("http://localhost:3000/logged");
  } catch (error) {
    console.log(error, "Failed to authorize Google user");
    return res.status(403).send("Acceso denegado");
  }
}

module.exports = {googleOauthHandler};
