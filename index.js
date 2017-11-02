var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
 
//mysql 
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'nemai1234.cyelmj7smxyj.us-east-1.rds.amazonaws.com',
    user : 'nemai1234',
    password : 'nemai1234',
    database : 'nemai1234',
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
    
       var queryString = "insert into userss(user_email) values('"+req.body.email+"')";
       
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
 
  var host = 'ec2-54-196-233-252.compute-1.amazonaws.com'
  var port = server.address().port
 
  console.log("Example app listening at http://%s:%s", host, port)
 
});
