const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const config = require('./config');
const morgan = require('morgan');
const mongoose = require('mongoose');
const formRoutes = require('./routes/form.routes');
const app = express();


//mongoDB Atlas Connection String
mongoose.connect("mongodb+srv://edwin:uysDzkCAtA8u0TQ0@cluster0.9awkq.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
  .then(db => console.log("db is connected"))
  .catch(error => console.log(error))

app.set('port', process.env.PORT || 8080);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/api', userRoutes.routes);

app.use('/api/form', formRoutes);


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
  console.log('CORS-enabled web server listening on port ' + app.get('port'));
  console.log('App listening on url http://localhost:' + app.get('port'));
});