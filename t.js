//var Twit = require('twit')

//var T = new Twit({
//  consumer_key:         'twitterTWEETtwitter',
//  consumer_secret:      'SECRETsecretSECRET',
//  access_token:         '1145141919810-SENPAI',
//  access_token_secret:  'tokenFIOEBCDKWKJSNDDN',
//  timeout_ms:           10*1000,  // optional HTTP request timeout to apply to all requests.
//  strictSSL:            true,     // optional - requires SSL certificates to be valid.
//})

//T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//  console.log(data)
//})
require ('./passwd.js')
var T = gett();
//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', { q: 'overflowcat since:2018-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})

//
//  get the list of user id's that follow @tolga_tezel
//
T.get('followers/ids', { screen_name: 'tolga_tezel' },  function (err, data, response) {
  console.log(data)
})

//
// Twit has promise support; you can use the callback API,
// promise API, or both at the same time.