const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const config = require('./config/config');
const { mongoose } = require('./db/mongoose');
const testroutes = require('./routes/testroutes');
const assigntestroutes = require('./routes/assignation');
const cluster = require('cluster')

//Cluster Programming
// if (cluster.isMaster) {
//   var numWorkers = require('os').cpus().length;

//   console.log('Master cluster setting up ' + numWorkers + ' workers...');

//   for (var i = 0; i < numWorkers; i++) {
//     cluster.fork();
//   }

//   cluster.on('online', function (worker) {
//     console.log('Worker ' + worker.process.pid + ' is online');
//   });

//   cluster.on('exit', function (worker, code, signal) {
//     console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
//     console.log('Starting a new worker');
//     cluster.fork();
//   });
// }

// else {

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.send('Server is up!');
});

app.use('/testroutes', testroutes);
app.use('/assignroutes', assigntestroutes);

app.post('/testroutes/testDetails', (req, res) => {
  res.send('Invalid End');
});

app.listen(config.PORT, process.env.IP, function () {
  console.log('Server started at port', config.PORT);
});

// //Global error handling
process.on('uncaughtException', function (err) {
  // handle the error safely
  errorMsg = 'Something went wrong! Kindly reload the page!';
  console.log(err, errorMsg);
  // process.send('offline');
  process.exit(0);
});

process.on('exit', code => {
  console.log(`About to exit with code: ${code}`);
});

module.exports = { app };
// }
