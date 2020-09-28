const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const path = require('path')
const bodyparser = require ('body-parser')


mongoose.connect("mongodb://localhost/15Data", { useNewUrlParser: true, useUnifiedTopology: true })
const Schema = mongoose.Schema
const newSchema = new Schema ({
    word: String
})
const dataa = mongoose.model("data", newSchema)


app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use (express.static(path.join(__dirname, 'dist')))
app.use (express.static(path.join(__dirname, 'node_models')))

app.post("/post", async (req, res) => {
    let word = req.body
    let toSave = new dataa
    await toSave.save(word)
    res.send(toSave)
})


app.get('/get', async (req, res) => {
    let goToUser = await dataa.find({})
    res.send(goToUser)
})


const port = 3000
app.listen(port, function (req, res) {
    console.log(`running for Dani in port ${port}`);
})