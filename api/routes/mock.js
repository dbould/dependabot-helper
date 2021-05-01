var express = require("express");
var router = express.Router();
var githubMock = require("../test/mock-endpoints/Github");
var { introspectionQuery } = require('graphql');

router.post('/get-vulnerabilities', function (request,
                                                        response, next) {
    let pattern = new RegExp('repository\\(name: \\"(\\w+)\\"');
    let results = pattern.exec(request.body.query);

    const github = new githubMock();
    response.send(github.getVulnerabilities(
        results[1],
        process.env.GITHUB_ORG,
        process.env.GITHUB_TOKEN
    ));
    response.end();
});

module.exports = router;
