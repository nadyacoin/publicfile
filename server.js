const express = require('express');
const app = express();
const path = require('path');
const serveIndex = require('serve-index');

app.use(express.static(__dirname + "/"))
app.use('/public', serveIndex(__dirname + '/public'));

app.listen(3333, '0.0.0.0');
