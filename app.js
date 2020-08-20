const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server is good");
});


app.get("/", (req, res) => {
    res.send("this is the home page");
})

app.get("/login", (req, res) => {
    res.send("login page")
})