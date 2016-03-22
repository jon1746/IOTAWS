var mysql = require('mysql');


var conn = mysql.createConnection({
    host: 'trexiniot.cdzmrrg0vowe.us-east-1.rds.amazonaws.com', // RDS endpoint 
    user: 'trexiniot', // MySQL username 
    password: 'jw849256', // MySQL password 
    database: 'trexiniot'
});


console.log('Connecting to DB');
conn.connect(

    function(err) {

        if (err) {
            console.log('Error connecting to Db' + err);
            return;
        };

        console.log('Connection established');


    }
)



exports.handler = function(event, context) {



    conn.query("INSERT INTO `orientation` SET date=?, pitch=?, yaw=?, roll=?, device=?", [event.date, event.pitch, event.yaw, event.roll, event.device], function(err, info) {


        if (err) {
            console.log('Error inserting to Db');
            return;
        };

        console.log("insert values in to database");
        context.succeed();

    })
}