const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  models.medications.findAll().then(medications => res.render("test", { medications: medications }))
});
module.exports = router;
