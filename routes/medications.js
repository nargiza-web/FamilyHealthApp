const express = require("express");
<<<<<<< HEAD
const router = express.Router()

router.get("/medications", (req, res) => {
  models.medications
    .findAll()
    .then(medications => res.render("test", { medications: medications }));
=======
const router = express.Router();

router.get("/", (req, res) => {
  models.medications.findAll().then(medications => res.render("test", { medications: medications }))
>>>>>>> 347458d6820c3e266fc85e26d729925c413225eb
});
module.exports = router;
