const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/aprenda', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'aprenda.html'));
});

app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quiz.html'));
});

app.get('/anemia', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'anemia.html'));
});

app.get('/fenilcetonuria', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'fenilcetonuria.html'));
});

app.get('/fibrose-cistica', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'fibrose_cistica.html'));
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});
