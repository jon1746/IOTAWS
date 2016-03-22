
var mysql = require('mysql');

Processor = {};

Processor.process = function (dataObj, callback) {
	// some manipulation of data; just multiplying here
	dataObj.val /= 2222.2;
	callback(dataObj);
}

Processor.initializeConnection = function() {
	Processor.connection = mysql.createConnection({
	  host	 : 'trexiniot.cdzmrrg0vowe.us-east-1.rds.amazonaws.com', 
	  user	 : 'trexiniot', 
	  password : 'jw849256', 
	  database : 'trexiniot',
	  port: 3306
	});
	Processor.connection.connect(function(err)
{
  if (err)
  { 
    throw err;
  }
  else 
  {
    console.log('DB connection establish');
  }
});
	console.log("Connect.");
};

Processor.disconnect = function () {
	Processor.connection.end(function(err) {
		console.log("Disconnect.");
	});
};


Processor.insertData = function(data) {
   console.log(data);
	Processor.connection.query("INSERT INTO `orientation` SET date=?, pitch=?, yaw=?, roll=?",
		[ data.date, data.pitch, data.yaw, data.roll],
		function(err, info){
			console.log(err + info);
		}
	);
};

	// Get the object from the event and show its content type
	Processor.initializeConnection();
//     Processor.insertData(myEvent);
	console.log('completed');	
		
	


