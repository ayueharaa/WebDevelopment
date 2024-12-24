import express from "express";
import bodyParser from "body-parser";

const app = express ();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('C:\Users\rafae\Desktop\Web Development\ToDo\public'));

const day = new Date().getDate ();
const month = new Date().getMonth () +1;
const year = new Date ().getFullYear ();

var todos = [];

var date = day + " / " + month + " / " + year;

app.get ("/", (req, res)=>{
    res.render ("index.ejs", {date, todos});
});

app.post ("/submit", (req, res)=>{
    var task = req.body["userTask"];
    todos.push(task);
    res.render ("index.ejs", {date, todos});
});



app.listen (port, ()=> {
    console.log (`Server running on port ${port}.`);
});

