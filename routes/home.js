const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index', { title: 'Book Store - Home Page'})
});

module.exports = router;
