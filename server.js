const express = require('express');
const app = express();
const port = 3000
const fs = require('fs');

//Greetings
app.get('/greeting',(req, res) => {
    res.send('Hello, Stranger');
})

app.get('/greeting/:name', (req, res) => {
    res.send('Whadddddup' + req.params.name + '!' + 'It\'s so great to see you!')
})

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
     const bigTip = (req.params.total * (req.params.tipPercentage / 100))
    res.send('Your tip is' + ' ' + bigTip);
})



app.listen(port, () => {
    console.log('listening');
})