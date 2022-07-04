const {google} = require('googleapis');



// Step 1: Set authorization parameters

/**
 * To use OAuth2 authentication, we need access to a CLIENT_ID, CLIENT_SECRET, AND REDIRECT_URI
 * from the client_secret.json file. To get these credentials for your application, visit
 * https://console.cloud.google.com/apis/credentials.
 */

const oauth2Client = new google.auth.OAuth2(
  "558789760835-323i1n243blve75l9hg3r20fm1eh1cr0.apps.googleusercontent.com",
  "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",
  "http://localhost:3001/api/auth/login"
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  'https://www.googleapis.com/auth/blogger',
  'https://www.googleapis.com/auth/calendar'
];

// Generate a url that asks permissions for the Drive activity scope
const authorizationUrl = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
  /** Pass in the scopes array defined above.
    * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
  scope: scopes,
  // Enable incremental authorization. Recommended as a best practice.
  include_granted_scopes: true
});


// Step 2: Redirect to Google's OAuth 2.0 server
// Para la ruta de login
//res.writeHead(301, { "Location": authorizationUrl });

// Step 3: Google prompts user for consent
// Step para ios y android

// Step 4: Handle the OAuth 2.0 server response

// Algo falopa

// Step 5: Exchange authorization code for refresh and access tokens

const url = require('url');

// Receive the callback from Google's OAuth 2.0 server.
if (req.url.startsWith('/oauth2callback')) {
  // Handle the OAuth 2.0 server response
  let q = url.parse(req.url, true).query;

  // Get access and refresh tokens (if access_type is offline)
  let { tokens } = await oauth2Client.getToken(q.code);
  oauth2Client.setCredentials(tokens);
}




module.exports = {oauth2Client, scopes, authorizationUrl}








// GET /oauthcallback?code={authorizationCode}
// This will provide an object with the access_token and refresh_token.
// Save these somewhere safe so they can be used at a later time.
// const {tokens} = await oauth2Client.getToken(code)
// oauth2Client.setCredentials(tokens);