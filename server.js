// Import Dependencies/Modules //
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { sendFile } = require('express/lib/response');
require('dotenv').config();



// Variables //
let mongoString = process.env.mongoString,
    dbName = 'moodCollection'

mongoose.connect(mongoString, {useNewUrlParser: true, useUnifiedTopology: true});

// Default Mongoose Connection //
let db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors) //
db.on('error', console.error.bind(console, `Cats: All your base are belong to us. You are on the way to destruction.`));



// Middleware //
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


// Render db Results //
app.get('/', (req, res) => {
    my-moods.find().toArray()
    .then(responses => {
        console.log(responses)
        res.render('index.ejs', { motd: responses })
    })
    .catch(error => console.error(error))
})



// PORT = 8000 //
app.listen(process.env.PORT || PORT, () => {
    console.log(`Captain: It's you on port ${process.env.PORT}!`)
})














// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose //