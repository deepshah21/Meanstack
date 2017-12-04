var express = require('express');
var app = express();

//static will look for the static locations of files  
app.use(express.static(__dirname + "/public"));

/*app.get('/',function(req,res){
   res.send("Hello World from server.js"); 
});*/

app.listen(3000);
console.log("server is running on 3000");