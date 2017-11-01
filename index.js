var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
 
//mysql 
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mydatabase',
	port :'3306'
    
    
});
//opening view
 
 app.get('/select', function(req,res){
     
       var queryString = "SELECT * FROM members";
       
       connection.query(queryString,function(error,results){
           if(error)
               {
                   throw error;
               }
           else 
               {
                 res.send(results);
               }
           
       });
       
  
 });
//insert data 
app.post('/insert', function(req,res){
    
       var queryString = "insert into members(firstName,lastName,email,phone) values('"+req.body.fname+"','"+req.body.lname+"','"+req.body.email+"','"+req.body.phone+"')";
       
       connection.query(queryString,function(error,results){
           if(error)
               {
                   throw error;
               }
           else 
               {
                 res.send('Inserted Successfully!')
               }
           
       });
       
   });
    
    
//start server
 
var server = app.listen(3009, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Example app listening at http://%s:%s", host, port)
 
});