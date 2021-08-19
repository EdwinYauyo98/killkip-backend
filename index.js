const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const config = require('./config');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api', userRoutes.routes);





app.listen(config.port, () => {
  console.log('App listening on url http://localhost:' + config.port);
});