var express = require("express");
var router = express.Router();
var dependabotService = require("../service/");

router.get("/", function(req, res, next) {
res.send("API is working properly");
});

router.get("/dependabot-alerts/all", function(req, res, next) {
    res.send("API is working properly");
});

module.exports = router;
