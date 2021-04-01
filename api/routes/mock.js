var express = require("express");
var router = express.Router();
var githubMock = require("../test/mock-endpoints/Github");

router.post('/mock-endpoints/get-vulnerabilities', function (request,
                                                        response, next) {
    const github = new githubMock();
    response.send(github.getVulnerabilities(repository, owner, authorization));
    response.end();
});
