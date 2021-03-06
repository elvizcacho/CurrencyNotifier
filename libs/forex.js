var request = require('request');


module.exports.getPrice = function(base, codestring, cb) {
	// I assume, I have already a security token
	request.get('https://api-fxtrade.oanda.com/v1/prices?instruments=' + codestring + '_' + base, function(err, response, body) {
		if (response.statusCode !== 200)
			err = JSON.parse(body);
		cb(err, JSON.parse(body));
	});
};
