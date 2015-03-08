
var https = require('https');
var Promise = require('promise');

module.exports = function(url, token, username) {
    console.log("path: " + url);
    return new Promise(function (fulfill, reject){
//    var username = '';
//    var password = '';
//    var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
//    var header = {'Host': 'www.example.com', 'Authorization': auth};
//    var request = client.request('GET', 'https://api.github.com/repos/stanleyta/githubtopcontributors/contributors', header);

        url = url || '/repos/stanleyta/githubtopcontributors/contributors';
        var auth = 'token ' + token;
        var options = {
            host: 'api.github.com',
            port: 443,
            method: "GET",
            path: url,
            headers: {
                "Authorization": auth,
                "User-Agent": username
            }
        };

        var req = https.request(options, function (in_res) {
            var output = '';
            in_res.setEncoding('utf8');
            in_res.pipe(process.stdout);
            in_res.on('data', function (chunk) {
                output += chunk;
                console.log("chunk: " + chunk);
            });
            in_res.on('end', function () {
                console.log("fulfilling: " + output);
                fulfill(output);
            });
            //TODO handle other status codes eg 401 403 404
        });
        req.on("error", function (e) {
            reject(e);
        });
        req.end();
    });
};