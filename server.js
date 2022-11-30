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

//Magic 8 Ball

app.get('/magic/:phrase', (req, res) =>{
    const eightball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    
    let fortune = eightball[Math.floor(Math.random() * eightball.length)];
    res.send(req.params.phrase + `<h1> ${fortune}</h1>`)



})


app.listen(port, () => {
    console.log('listening');
})