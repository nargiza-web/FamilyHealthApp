const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
<<<<<<< HEAD
    res.send('hello, index!')
=======
    res.send("index")
>>>>>>> 347458d6820c3e266fc85e26d729925c413225eb
})


module.exports = router