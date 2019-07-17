var Twit = require('twit')
//var __
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
var passwd = require ('./passwd.js');
var T = passwd.gett();
function BbyFllwrs(username){
T.get('followers/ids', { screen_name: username },  function (err, data, response) {
  var unl = data.ids;
  console.log (unl);
})
var errinfo = "";
return errinfo;
}
BbyFllwrs("tnqzh123");
// Twit has promise support; you can use the callback API,
// promise API, or both at the same time.