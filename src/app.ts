import express from 'express';
import path from "path";

const app = express();  
const port = 3000;

app.all('/home', (req, res) => {
  res.send('home page.')
});

console.log(__dirname)
app.use('/static', express.static(path.join(__dirname, 'public')));


app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
})

app.listen(port, () => {
  console.log(`application running on port ${port}.`);
});