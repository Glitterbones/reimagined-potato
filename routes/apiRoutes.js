const app = require("express").Router()
const fs = require("fs")
let notes = require("../db/db.json")



app.get ("/notes", (req, res) => {
    console.log("hello World!");
    res.json(notes)
})
