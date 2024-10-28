const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/aprenda', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'aprenda.html'));
});

app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quiz.html'));
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});
