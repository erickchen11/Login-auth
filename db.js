let mysql = require('mysql');
let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let path =  require('path'); 

//db connection 
var connection = mysql.createConnection({
	host     : '3306',
	user     : 'root',
	password : 'Deckzombie11.',
	database : 'nodelogin'
});
//express with modules needed
var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//displays loginform
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});j