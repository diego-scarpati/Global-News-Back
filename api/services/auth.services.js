const qs = require("qs");
// const config = require("config");
const axios = require("axios");

// interface GoogleTokensResult {
//   access_token: string;
//   expires_in: Number;
//   refresh_token: string;
//   scope: string;
//   id_token: string;
// }

async function getWebGoogleOAuthTokens({
  code,
}){
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code,
    client_id: "558789760835-323i1n243blve75l9hg3r20fm1eh1cr0.apps.googleusercontent.com",
    client_secret: "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",
    redirect_uri: "http://localhost:3001/api/auth/login",
    grant_type: "authorization_code",
  };

  try {
    const res = await axios.post(
      url,
      qs.stringify(values),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error(error.response.data.error);
    console.log(error, "Failed to fetch Google Oauth Tokens");
    throw new Error(error.message);
  }
}

async function getIOSGoogleOAuthTokens({
  code,
}){
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code,
    client_id: "558789760835-q546aa7dgpcs0p04r3qaslgg7i94cueu.apps.googleusercontent.com",
    client_secret: "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",
    redirect_uri: "http://localhost:3001/api/auth/loginIOS",
    grant_type: "authorization_code",
  };

  try {
    const res = await axios.post(
      url,
      qs.stringify(values),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error(error.response.data.error);
    console.log(error, "Failed to fetch Google Oauth Tokens");
    throw new Error(error.message);
  }
}

// interface GoogleUserResult {
//   id: string;
//   email: string;
//   verified_email: boolean;
//   name: string;
//   given_name: string;
//   family_name: string;
//   picture: string;
//   locale: string;
// }

async function getGoogleUser({
  id_token,
  access_token,
}){
  try {
    const res = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error, "Error fetching Google user");
  }
}

// export async function findAndUpdateUser(
//   query: FilterQuery<UserDocument>,
//   update: UpdateQuery<UserDocument>,
//   options: QueryOptions = {}
// ) {
//   return UserModel.findOneAndUpdate(query, update, options);
// }

module.exports = {getGoogleUser, getWebGoogleOAuthTokens, getIOSGoogleOAuthTokens}