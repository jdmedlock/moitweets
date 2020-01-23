const request = require("request-promise-native")
/**
 * Retrieve a bearer token for the Twitter API. This depends on the
 * environment variables `TWITTER_API_KEY` and `TWITTER_API_SECRET` being 
 * defined with the MoiTweets application key and secret 
 * (see https://developer.twitter.com)
 * @returns {String} Twitter API bearer token
 */
const getBearerToken = async () => {
  const apiKey = process.env.TWITTER_API_KEY
  const apiSecret = process.env.TWITTER_API_SECRET
  const key = apiKey + ":" + apiSecret
  const credentials = new Buffer(key).toString('base64')

  const url = 'https://api.twitter.com/oauth2/token'

  const bearerToken = await request({ 
    url: url,
    method:'POST',
    headers: {
        "Authorization": "Basic " + credentials,
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: "grant_type=client_credentials",
    json: true
  })
  return  bearerToken.access_token;
}

const getTweets = async (twitterName) => {
  let tweetsJSON;
  try {
    let bearerToken = await getBearerToken()
    tweetsJSON = await request({ 
      url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
      method: 'GET',
      qs:{"screen_name": twitterName},
      json:true,
      headers: {
          "Authorization": "Bearer " + bearerToken
      },
      json: true
    })
    bearerToken = null
  }
  catch (error) {
    return({ 
      "statusCode": error.statusCode,
      "tweetsJSON": [ error.error.errors[0] ], 
    })
  }

  return ({
    "statusCode": "ok",
    "tweetsJSON": tweetsJSON,
  })
}

module.exports = getTweets