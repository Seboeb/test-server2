const axios = require('axios');
const oauth = require('./oauth');
const secret = require('./secret');
const request = require('request');
const urlNet = "https://3983849-sb2.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=899&deploy=1";
// const urlNet = 'https://webhook.site/7abbac56-1927-4c1e-a5a4-1df4d27a79a9';

var headers = oauth.getHeaders({
    url: urlNet,
    method: 'POST',
    tokenKey: secret.token.public,
    tokenSecret: secret.token.secret
});
headers['Content-Type'] = 'application/json';

console.log(headers);

//Log header
// //console.log(headers);
//
//MAKE OPTIONS FOR REQUEST
let options = {
    method: 'POST',
    uri: urlNet,
    resolveWithFullResponse: true,
    json: true,
    headers: headers,
    body: { message: "hoi" }
};

//MAKE RESTLET REUEST
console.log('Sending expense request to NetSuite');
request(options, (error, response, body) => {

    console.log('----- NetSuite response -----');
    console.log(`Error info: ${error}`);
    console.log(`Status code: ${response.statusCode}`);
    console.log(body);
    console.log('\n');

});
