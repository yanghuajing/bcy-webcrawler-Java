﻿system = require('system')
address = system.args[1];
path = system.args[2]

var page = require('webpage').create();
var url = address;
var savePath = path;

//添加cookie
var flag = phantom.addCookie({
  'name'     : 'sessionid', //cookie的name
  'value'    : '换成你自己的value', //cookie的value
  'domain'   : '.bcy.net',
  'path'     : '/',
  'httponly' : false,
  'secure'   : false,
  'expires'  : 'Fri, 01 Jan 2038 00:00:00 GMT'
});
console.log(flag);

if(flag) {
	page.open(url, function (status) { 
		console.log("Status: " + status);
		if (status === 'success') {
			window.setTimeout(function () {
				page.render(savePath + "webscreenshot.png");
				console.log(page.content);
				phantom.exit();
			}, 5000);
		} else {
			console.log('Failed to post!');
			phantom.exit();
		}
	});
} else {
	console.log('cookies error')
}