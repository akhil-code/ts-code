import express from "express";
import path from "path";

const app = express();
const port : string|number = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Instagram" });
});

app.listen(port, () => {
  console.log(`application running on port ${port}.`);
});
