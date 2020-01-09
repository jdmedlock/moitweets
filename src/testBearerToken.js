const request = require("request");

const url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
// var bearerToken = process.env.TWITTER_BEARER_TOKEN; //the bearer token obtained from the last script
const bearerToken = "replace with your bearer token from createBearerToken.js";

request({ url: url,
    method:'GET',
    qs:{"screen_name":"chingucollabs"},
    json:true,
    headers: {
        "Authorization": "Bearer " + bearerToken
    }

}, function(err, resp, body) {

    console.dir(body);

});