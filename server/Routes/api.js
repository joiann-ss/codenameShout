var express = require('express');
var router = express.Router();
var api = require('../Controllers/api');
var aws = require('../Controllers/aws');
var fbToken = require('../lib/config/facebook.json')

router.get('/config', function(req, res) {
  console.log('GET /api/config');
  api.getClientConfig(req, res);
});

router.get('/s3Policy', aws.getS3Policy);

router.get('/fbToken', function(req, res) {
	console.log('GET /api/fbToken');
	res.status(200).send(fbToken.appID);
})

// All undefined api routes should return a 404
//router.get('/*', function(req, res) {
//  console.log('ERROR GET /api/*');
//  res.send(404);
//});

module.exports = router;
