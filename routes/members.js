const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    models.families.findAll().then(members => res.render("members", {members: members}))
})


module.exports = router