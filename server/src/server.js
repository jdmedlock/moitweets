'use strict';
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const getTweets = require('./getTweets')

const app = express();
const router = express.Router();


const result = dotenv.config();
if (result.error) {
  throw result.error
}

getTweets('jd_medlock')

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>MoiTweets Backend Server is up and running!</h1>');
  res.end();
});

// Process a request to retrieve Tweets
router.get('/gettweets', (req, res) => {
  getTweets(req.twitterName)
  res.json({ data: req.twitterName }) // Just for testing
});

app.use(bodyParser.json())
app.use('/.netlify/functions/server', router)  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')))

module.exports = app
module.exports.handler = serverless(app)
