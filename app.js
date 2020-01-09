const express = require('express')
const app = express()
const mustacheExpress = ('mustache-express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const PORT = process.env.PORT || 8080
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: false}))
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engine', 'mustache')

app.get("/hello", (req,res)=>{
    res.send('Hello!')
})



app.listen(PORT, ()=>{
    console.log("Server is running...")
})