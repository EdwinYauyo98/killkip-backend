const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const config = require('./config');
const app = express();

app.set('port', process.env.PORT || 8080);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api', userRoutes.routes);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/////
// var mysql      = require('mysql');
// var conTest = mysql.createConnection({
//   host     : '35.209.204.163',
//   user     : 'u3r93gq4a5p9l',
//   password : '2@Gj#34d21N3',
//   database : 'dbverjyqgshgtb'
// });
 
// conTest.connect();
 
// conTest.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// conTest.end();
////


app.listen(app.get('port'), () => {
  console.log('App listening on url http://localhost:' + config.port);
});