const express = require("express");

//express app
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./view/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.status(301).redirect("/about");
});

app.use((req, res) => {
  res.status(404).sendFile("./view/404.html", { root: __dirname });
});
