import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const port : string|number = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  
  type dataMap = {
    title : string,
    avatarUrls ?: string[]
  }
  
  let options : dataMap = {
    "title": "Instagram"
  }
  let out = fs.readFileSync(path.join(__dirname, "assets/profile-avatars.json")).toString();
  options.avatarUrls = JSON.parse(out).images;
  res.render("index", options);
});

app.get("/explore", (req, res) => {
  res.render("explore", {
    "title": "Instagram"
  })
});

app.get("/profile", (req, res) => {
  res.render("profile", {
    "title": "Instagram"
  });
});

app.listen(port, () => {
  console.log(`application running on port ${port}.`);
});
