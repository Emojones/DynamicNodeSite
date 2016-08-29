//Problem: We need a simply way to look at user's badge count and JS point from a web browser
//Solution: Use Node to perform the profiel look ups and server our templat via HTTP
var router = require('./router.js');
//Creat a web server
var http = require('http');
http.createServer (function (request, response){
  router.home(request, response);
  router.user(request, response);
}).listen(8080);
console.log('server running');


//Function that handles the reading of filesand merge in vaules
    //read from file and get a string
      //merge value into string