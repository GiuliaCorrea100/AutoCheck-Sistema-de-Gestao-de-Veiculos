import express from "express";
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server runing on port ${port}.`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});