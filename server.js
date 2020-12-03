const http = require('http');
const express = require('express');


const dataRouter = require('./routes/data');


const app = express();
app.use(express.json());



app.use('/data', dataRouter);

app.use('/', function(req, res) {
    res.send('it works!');
});


const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);
