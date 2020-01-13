const request = require("request");

const key = "replace with your API key";
const secret = "replace with your API secret";
const cat = key +":"+secret;
const credentials = new Buffer(cat).toString('base64');

const url = 'https://api.twitter.com/oauth2/token';

request({ url: url,
    method:'POST',
    headers: {
        "Authorization": "Basic " + credentials,
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: "grant_type=client_credentials"

}, function(err, resp, body) {

    console.dir(body); //the bearer token...

});