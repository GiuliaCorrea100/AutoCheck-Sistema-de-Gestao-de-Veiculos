import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static("public/imagens "));
 
app.listen(port, () => {
    console.log(`Server runing on port ${port}.`);
});

app.get(["/", "/home.ejs"], (req, res) => {
    res.render("home.ejs");
});

app.get("/telaFoto.ejs", (req, res) => {
    res.render("telaFoto.ejs");
});

app.get("/tirarFoto.ejs", (req, res) => {
    res.render("tirarFoto.ejs");
});
