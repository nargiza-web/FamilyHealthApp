const express = require("express")
const router = express.Router()

<<<<<<< Updated upstream
router.get("/", (req, res) => {
=======
router.get("/careproviders", (req, res) => {
>>>>>>> Stashed changes
    models.CareProviders.findAll().then(providers => res.render("test", {providers: providers}))
})

module.exports = router