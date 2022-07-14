// Dependencies //
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { sendFile } = require('express/lib/response');
require('dotenv').config();



// Variables //
let db,
    mongoString = process.env.mongoString,
    dbName = 'my-moods'

mongoose.connect(mongoString)
    .then(client => {
        console.log(`Cats: All your base are belong to us. You are on the way to destruction.`)
        db = client.db(dbName)
        collection = db.collection('my-moods')
    })

// Middleware //
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expres.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())






// PORT = 8000 //
app.listen(process.env.PORT || PORT, () => {
    console.log(`Captain: It's you on port ${process.env.PORT}!`)
})