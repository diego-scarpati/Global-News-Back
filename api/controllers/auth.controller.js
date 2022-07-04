const { CookieOptions, Request, Response } = require("express");
const Users = require("../models/Users");
// const config = require("config");
// import jwt from "jsonwebtoken";
// const {
//   createSession,
//   findSessions,
//   updateSession,
// } = require("../service/session.service");
const {
  // findAndUpdateUser,
  getWebGoogleOAuthTokens,
  getIOSGoogleOAuthTokens,
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

class SetEmail {
  constructor(email) {
    this.email = email;
  }
}
let email;
class GoogleController {
  static googleOauthHandler = async (req, res, next) => {
    console.log("baseUrl:", req.baseUrl);
    console.log("originalUrl:", req.originalUrl);
    console.log("route:", req.route);
    console.log("Entre en Web Login");
    // console.log("host:", req.route.host)
    // console.log("Origin:", req.headers)
    // get the code from qs
    const code = req.query.code;

    try {
      // get the id and access token with the code
      const { id_token, access_token } = await getWebGoogleOAuthTokens({ code });
      // console.log({ id_token, access_token });

      // get user with tokens
      const googleUser = await getGoogleUser({ id_token, access_token });
      //jwt.decode(id_token);

      // console.log({ googleUser });

      if (!googleUser.verified_email) {
        return res.status(403).send("Google account is not verified");
      }

      const [user] = await Users.findOrCreate({
        where: { email: googleUser.email },
        defaults: {
          email: googleUser.email,
          name: googleUser.given_name,
          lastName: googleUser.family_name,
          token: id_token,
        },
      });
      // console.log(user)
      // email = new SetEmail(user.email)
      // res.cookie("user", user.id)

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

      // return res.redirect("localhost:19006/Register");
      // await this.getMe(user)
      // console.log("email de ", email.email)
      // console.log("email de user", user.email)
      // return res.send(user) // Necesito que me redirija pero mandandole params a la url

      // if (req.query.web) {
      //   return res.redirect(`http://localhost:19006/?id=${user.id}`)
      // } else {
      //   return res.redirect(`exp://192.168.0.180:19000/?id=${user.id}`)
      // }
      return res.redirect(`http://localhost:19006/?id=${user.id}`);
    } catch (error) {
      console.log(error, "Failed to authorize Google user");
      return res.status(403).send("Acceso denegado");
    }
  };
  static async getMe(req, res, next) {
    console.log("email de getME", req?.dataValues?.email);
    try {
      const loggedUser = await Users.findOne({
        where: { email: req?.dataValues?.email },
      });
      return res.send(loggedUser);
    } catch (error) {
      console.log(error);
    }
  }
  static googleIOSOauthHandler = async (req, res, next) => {
    // console.log("baseUrl:", req.baseUrl);
    // console.log("originalUrl:", req.originalUrl);
    // console.log("route:", req.route);
    // console.log("host:", req.route.host);
    console.log("Entre en IOS Login");
    
    const code = req.query.code;
    // console.log("code:", code);
    console.log("Llego a code");
    
    try {
      console.log("Llego al try");
      const { id_token, access_token } = await getIOSGoogleOAuthTokens({ code });
      console.log("Llego a crear id_token y access_token");
      
      const googleUser = await getGoogleUser({ id_token, access_token });
      console.log("Llego a crear googleUser");
      
      if (!googleUser.verified_email) {
        console.log("No se pudo verificar el mail");
        return res.status(403).send("Google account is not verified");
      }

      const [user] = await Users.findOrCreate({
        where: { email: googleUser.email },
        defaults: {
          email: googleUser.email,
          name: googleUser.given_name,
          lastName: googleUser.family_name,
          token: id_token,
        },
      });
      console.log("user", user.id)
      
      console.log("Llego hasta el final del controller");
      const url = `exp://192.168.0.180:19000/`
      let query = +`?user=${user.id}`
      return res.redirect(url);
    } catch (error) {
      console.log(error, "Failed to authorize Google user");
      return res.status(403).send("Acceso denegado");
    }
  };
}
module.exports = GoogleController;
