const express = require("express");
const router = express.Router()

router.get("/medications", (req, res) => {
  models.medications
    .findAll()
    .then(medications => res.render("test", { medications: medications }));
});
module.exports = router;
