const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const PORT = process.env.PORT || 8080
require('dotenv').config()
const path = require('path')
const VIEWS_PATH = path.join(__dirname,'/views')
global.models = require("./models")


app.use(bodyParser.urlencoded({extended: false}))
app.engine('mustache', mustacheExpress(VIEWS_PATH + './partials', '.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engine', 'mustache')

const careproviderRouter = require("./routes/careproviders")
const familiesRouter = require('./routes/families')

app.use("/careproviders", careproviderRouter)
app.use('/families',familiesRouter)

app.get('/', (req, res)=> {
    res.send("yeah")
})
app.get("/hello", (req,res)=>{
    res.send('Hello!')
})

app.listen(PORT, ()=>{
    console.log("Server is running...")
})