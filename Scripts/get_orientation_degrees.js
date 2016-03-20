var PythonShell = require('python-shell');
 
PythonShell.run('get_orientation_degrees.py',  function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution 
  console.log('results: %j', results[0]);
});
