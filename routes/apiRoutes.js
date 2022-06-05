const fs = require("fs")
const app = reqire("express").Router()
let notes = require ("../db/db.json")

app.get ("notes", (req,res) => {
    console.log("Notes"); 
    res.json(notes)
})


app.post('/notes')