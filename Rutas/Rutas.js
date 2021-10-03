const express = require("express")
const router = express.Router();

router.get("/", (req,res) => {
    res.render("index.html", { title: "first" });
});

router.get("/Chat", (req,res) => {
    res.render("chat.html", { title: "first" });
});

module.exports = router;