const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


app.set('view engine', 'ejs');


app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url} at ${new Date().toLocaleTimeString()}`);
  next();
});




app.get('/', (req, res) => {
  res.render('home');
});


app.get('/register', (req, res) => {
  res.render('register');
});


app.get('/about', (req, res) => {
  res.render('about');
});


app.get('/student/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Welcome ${name} to the Student Portal`);
});


app.post('/submit', (req, res) => {
  const { name, email, course, age } = req.body;

  res.render('result', { name, email, course, age });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});