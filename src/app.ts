import express from "express";
import path from "path";
import {generateNewsFeed} from "./service/feedService"

const app = express();
const port : string|number = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Return news feed which is the home page.
 */
app.get("/", (req, res) => {
  res.render("index", {
    title: "Instagram",
    newsFeed: generateNewsFeed({id: "23341234123"})
  });
});


app.listen(port, () => {
  console.log(`application running on port ${port}.`);
});
