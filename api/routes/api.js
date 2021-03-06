var express = require("express");
var router = express.Router();
var GithubService = require("../service/Github");

router.get("/", function(req, res, next) {
res.send("API is working properly moo");
});

router.get("/dependabot-alerts", function(request, response, next) {
    const githubService = new GithubService(
        process.env.GITHUB_URL,
        process.env.GITHUB_REPOSITORY,
        process.env.GITHUB_ORG,
        process.env.GITHUB_TOKEN
    );
    response.setHeader('Content-Type', 'application/json');
    githubService.getAlertsForOrganisation().then((alerts) => {
        response.send(JSON.stringify(alerts));
        response.end();
    });
});

router.post('/get-vulnerabilities', function (request,
                                              response, next) {
    const github = new githubMock();
    response.send(github.getVulnerabilities(
        process.env.GITHUB_URL,
        process.env.GITHUB_REPOSITORY,
        process.env.GITHUB_ORG,
        process.env.GITHUB_TOKEN
    ));
    response.end();
});

module.exports = router;
