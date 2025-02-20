const express = require('express');
const morgan = require('morgan');
const app = express();
const routerHandler = require('./routes');

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
res.status(200).json({ message: 'API in running', success: true });

});

app.use('/api/v1', routerHandler);

module.exports = app;