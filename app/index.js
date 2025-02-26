const express = require('express');
const app = express();
const routerHandler = require('./routes');

app.get('/', (req, res) => {
res.status(200).json({ message: 'API in running', success: true });

});

app.use('/api/v1', routerHandler);
module.exports = app;