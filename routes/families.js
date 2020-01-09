const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    models.families.findAll().then(families => res.render("family", {families: families}))
})


module.exports = router