const express = require('express');

const app = express();

app.get('/andy', (req, res) => {
    res.send('Hello world hahaha');
});

const port = 3000;

app.listen(process.env.port || port);

console.log(`Web server is listening at port ${process.env.port || port}`)