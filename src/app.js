const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

const PORT = 3001;

app.get('/', (req, res) => {
    res.render('home', { layout: false });
});

app.listen(PORT, () => {
    console.log(`StudyHub rodando em http://localhost:${PORT}`);
});