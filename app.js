const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
// const PORT = process.env.PORT || 8080
// const PORT = 3000
require('dotenv').config()
const path = require('path')
const VIEWS_PATH = path.join(__dirname,'/views')
const PORT = 3000
const models = require("./models")

app.use(bodyParser.urlencoded({extended: false}))
app.engine('mustache', mustacheExpress(VIEWS_PATH + './partials', '.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engine', 'mustache')

const careproviderRouter = require("./routes/careproviders")

app.use("/careproviders", careproviderRouter)

app.get("/hello", (req,res)=>{
    res.send('Hello!')
})

app.get("/ian", (req, res) => {
    models.CareProviders.findAll().then(providers => res.render("test", {providers: providers}))
})

app.listen(PORT, ()=>{
    console.log("Server is running...")
})