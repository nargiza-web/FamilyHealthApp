const express = require("express")
const router = express.Router()

app.get("/careproviders", (req, res) => {
    models.CareProviders.findAll().then(providers => res.render("test", {providers: providers}))
})

module.exports = router