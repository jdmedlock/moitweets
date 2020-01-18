const request = require("request")

const getBearerToken = async () => {
    const key = process.env.TWITTER_API_KEY
    const secret = process.env.TWITTER_API_SECRET
    const cat = key + ":" + secret
    const credentials = new Buffer(cat).toString('base64')

    const url = 'https://api.twitter.com/oauth2/token'

    request({ 
        url: url,
        method:'POST',
        headers: {
            "Authorization": "Basic " + credentials,
            "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: "grant_type=client_credentials"
    }, function(err, resp, body) {
        console.dir(body); //the bearer token...
    });
}

const getTweets = async (twitterName) => {
    const bearerToken = await getBearerToken()
    const url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'

    request({ 
        url: url,
        method:'GET',
        qs:{"screen_name":"chingucollabs"},
        json:true,
        headers: {
            "Authorization": "Bearer " + bearerToken
        }
    }, function(err, resp, body) {
        console.dir(body)
    });
}

module.exports = getTweets