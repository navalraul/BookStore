const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello  ecls from backend")
})

app.listen(1000, () => {
    console.log("Server Started");
})