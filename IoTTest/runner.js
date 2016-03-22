var Consumer = require('sqs-consumer');
var AWS = require('aws-sdk');
 var mysql = require('mysql');
 
 
 
 
AWS.config.update({
  region: 'us-east-1',
  accessKeyId: '0SJ0YNG3RCM6S6MP1FR2',
  secretAccessKey: 'zueIYTHWeQHtiXJ78f6rea3QyAnoBgfvyRbtuTrr'
});
 
 
 
   var conn = mysql.createConnection({
        host: 'trexiniot.cdzmrrg0vowe.us-east-1.rds.amazonaws.com', // RDS endpoint 
        user: 'trexiniot', // MySQL username 
        password: 'jw849256', // MySQL password 
        database: 'trexiniot'
    });

 
  conn.connect(

        function(err) {
     //      console.log(conn);
            if (err) {
                console.log('Error connecting to Db' + err);
                return;
            };

            console.log('Connection established');
 
 
 
 
var app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/017874526652/trexinIOT',
  handleMessage: function (message, done) {
 
    myEvent = JSON.parse(message.Body);
//    console.log(myEvent); 
//   console.log( 'pitch' + myEvent.pitch);
  
//   console.log(myEvent.pitch); 
   conn.query("INSERT INTO `orientation` SET date=?, pitch=?, yaw=?, roll=?,device=?", [myEvent.date, myEvent.pitch, myEvent.yaw, myEvent.roll,myEvent.device], function(err, info) {


                if (err) {
                    console.log('Error inserting to Db');
                    return;
                };

                console.log("insert values in to database");
                done();
            });
  
  
  
  
  
  
  
  
  
  
  
   
  }
});
 
app.on('error', function (err) {
  console.log(err.message);
});
 
app.start();

}
    )