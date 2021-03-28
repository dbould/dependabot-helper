var express = require("express");
var router = express.Router();
var GithubService = require("../service/Github");

router.get("/", function(req, res, next) {
res.send("API is working properly moo");
});

router.get("/dependabot-alerts/all", function(request, response, next) {
    githubService = new GithubService();
    response.setHeader('Content-Type', 'application/json');
    response.send(githubService.getAlertsForOrganisation());
});

module.exports = router;
