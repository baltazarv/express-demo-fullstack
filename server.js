const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('view', { noCache: true })

app.use((req, res, next) => {
  console.log(`you requested ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.render('index', { message: 'Welcome to Express' });
});

app.get('/foos', (req, res) => {
  res.render('foos');
});

app.listen(3000);
