//
//	SAMPLE NODE SERVER
//	2013.07.17.
//	kang hwan ki
//
var http 	= require("http");
var url 	= require("url");
var path	= require("path");
var fs		= require("fs");

var SERVER_INFO = {
	IP : "127.0.0.1",
	PORT : 9000
};

var CONTENT_TYPE = {
	HTML : "text/html",
	CSS : "text/css",
	JS : "text/javascript",
	XML : "text/xml"
};

var action = function(req,res) {
	var uri 			= url.parse(req.url).pathname;
	var filename 	= path.join(process.cwd(),uri);

	console.log("[INFO] : uri  : "+uri);
	console.log("       : file : "+filename);
	console.log("");

	path.exists(filename, function(exists){
		if(!exists){
			res.writeHead(404, {"Content-Type":"text/plain"});
			res.write("404 Not Found\n");
			res.end();
			return;
		}

		if(fs.statSync(filename).isDirectory()){
			filename += "/index.html";
		}

		fs.readFile(filename, "binary", function(err, file){
			if(err){
				res.writeHead(500, {"Content-Type":"text/plain"});
				res.write(err + "\n");
				res.end();
				return;
			}

			var key 				= path.extname(filename).replace(".","").toUpperCase();
			var contentType = CONTENT_TYPE[key] || "text/plain";
			var headers 		= {"Content-Type":contentType};
			res.writeHead(200,headers);
			res.write(file,"binary");
			res.end();
			return;
		});
	});
};

http.createServer(action).listen(SERVER_INFO.PORT, SERVER_INFO.IP);

console.log("IP : "+SERVER_INFO.IP);
console.log("PORT : "+SERVER_INFO.PORT);
console.log("Start web server...");
console.log("Stop web server command is [Ctrl + C]");
console.log(".");
console.log(".");
console.log(".");