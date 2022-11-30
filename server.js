const express = require('express');
const app = express();
const port = 3000
const fs = require('fs');

app.get('/greeting',(req, res) => {
    res.send('Hello, Stranger');
})

app.get('/greeting/:name', (req, res) => {
    res.send('Whadddddup' + req.params.name + '!' + 'It\'s so great to see you!')
})

app.listen(port, () => {
    console.log('listening');
})