const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/views/${name}`));
    };
    next();
});

app.use('/user', (req, res, next) => {
    res.send('<h1>Go away! To view this page u need to be logged it!</h1>');
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.show('index.html');
});

app.get('/home', (req, res) => {
    res.show('index.html');
});

app.get('/about', (req, res) => {
    res.show('about.html');
});

app.get('/user/settings', (req, res) => {
    res.show('user.html');
});

app.get('/user/panel', (req, res, next) => {
    res.show('user.html');
});

app.use((req, res) => {
    res.status(404).send('<img src="/404.jpg"/><h1>404 not found...</h1>');
})

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});