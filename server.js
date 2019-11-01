const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = [{
    login: 'me',
    password: 'me'
}];

app.use(bodyParser());
app.use(express.static(join(__dirname, 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.post('/createUser', (req, res) => {
    users.push(req.body);
    console.log(users);
    res.sendStatus(200);
  });

app.post('/checkUser', (req, res) => {
    users.filter((user) => user.login == req.body.login && user.password == req.body.password)?
    res.sendStatus(200) : null;
    console.log(sessionStorage.getItem('isLogged'));
});

app.listen(3000, () => console.log('port 3000'));
