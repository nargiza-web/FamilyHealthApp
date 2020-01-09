const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const path = require('path')
const VIEWS_PATH = path.join(__dirname,'/views')
const PORT = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engine', 'mustache')




app.listen(PORT, ()=>{
    console.log("Server is running...")
})