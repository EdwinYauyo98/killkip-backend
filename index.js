const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const config = require('./config');
const morgan = require('morgan');
const mongoose = require('mongoose');
const formRoutes = require('./routes/form.routes');
const app = express();
const fs = require('fs');

//mongoDB Atlas Connection String
mongoose.connect("mongodb+srv://edwin:uysDzkCAtA8u0TQ0@cluster0.9awkq.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
  .then(db => console.log("db is connected"))
  .catch(error => console.log(error))

const puerto = process.env.PUERTO || 8000;
app.listen(puerto, function(){
    console.log("Servidor Ok en puerto:"+puerto);
});
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/*app.get('/', function(req,res){
    res.send('Ruta INICIO');
});*/

fs.readdirSync(`${__dirname}/routes`).map((file) => {
  require(`./routes/${file}`)(app);
});

app.use('/api', userRoutes.routes);

app.use('/api/form', formRoutes);


app.listen(app.get('port'), () => {
  console.log('aplicacion en ejecucion o url http://localhost:' + app.get('port'));
});


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


var corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200 
  methods: "GET, PUT, POST, OPTIONS, DELETE"
}
