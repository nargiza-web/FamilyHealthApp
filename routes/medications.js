const express = require("express");
const router = require("expressRouter");

app.get("/medications", (req, res) => {
  models.medications
    .findAll()
    .then(medications => res.render("test", { medications: medications }));
});
module.exports = router;
