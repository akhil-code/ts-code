import express from 'express';

const app = express();  
const port = 3000;

/**
 * Default path
 */
app.get("/", (req, res) => {
  res.send("Had hit default path of the application.")
})

/**
 * Hello world path.
 */
app.get("/hello", (req, res) => {
  res.send("Hello world.");
});

app.listen(port, () => {
  console.log(`application running on port ${port}.`);
});