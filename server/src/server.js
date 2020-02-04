'use strict'
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const serverless = require('serverless-http')
const getTweets = require('./getTweets')

const app = express()
const router = express.Router();

const result = dotenv.config()
if (result.error) {
  throw result.error
}

app.use(express.static(path.join(__dirname, 'client')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// Process a request to the default route
app.get('/', (req, res) => {
  res.send('MoiTweets backend is active')
})

// Process a request to retrieve Tweets for a specific user
app.get('/gettweets/:id', async (req, res) => {
  const tweetsJSON = await getTweets(req.params.id)
  res.send({ data: tweetsJSON }) // Just for testing
})

app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app
module.exports.handler = serverless(app)
