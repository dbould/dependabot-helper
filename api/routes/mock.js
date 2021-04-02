var express = require("express");
var router = express.Router();
var githubMock = require("../test/mock-endpoints/Github");

router.post('/mock-endpoints/get-vulnerabilities', function (request,
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
