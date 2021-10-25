import express from 'express';

const app = express();  
const port = 3000;

app.all('/home', (req, res) => {
  res.send('home page.')
});

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
})

app.listen(port, () => {
  console.log(`application running on port ${port}.`);
});