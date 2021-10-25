import express from 'express';
import path from "path";

const app = express();  
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index', {
    "title": "Hello world"
  })
});

app.listen(port, () => {
  console.log(`application running on port ${port}.`);
});