const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const http = require('http');

const app = express();

const server = http.Server(app);

app.use(cors());
app.use(bodyParser.json());
app.use(require('./routes'));

server.listen(process.env.PORT || 3333, () => {
  console.log('Server is running...');
});
