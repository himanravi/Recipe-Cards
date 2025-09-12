// app.js
const express = require('express');
const app     = express();
const PORT    = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// In-memory store
const recipes = [];

app.get('/', (req, res) => {
  res.render('index', { recipes });
});

app.post('/add', (req, res) => {
  const { name, ingredients, time, image } = req.body;
  if (!name || !ingredients || !time) {
    return res.status(400).send('Name, ingredients & time required.');
  }
  recipes.unshift({ name, ingredients, time, image: image || '/img/placeholder.jpg' });
  res.redirect('/');
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));