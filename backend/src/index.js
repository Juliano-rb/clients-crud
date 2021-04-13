const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
require('reflect-metadata');
const createConnection = require('typeorm').createConnection;

const app = express();
const server = http.Server(app);

createConnection();

app.use(cors());
app.use(bodyParser.json());
app.use(require('./routes'));

server.listen(3333, () => {
  console.log('Server is running at http://127.0.0.1:3333');
});
