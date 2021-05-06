var express = require('express');
var router = express.Router();
var GithubService = require("../service/Github");

const githubService = new GithubService(
    process.env.GITHUB_URL,
    process.env.GITHUB_REPOSITORY,
    process.env.GITHUB_ORG,
    process.env.GITHUB_TOKEN
);

/* GET home page. */
router.get('/', function(request, response, next) {
  let getRepositories = githubService.getRepositoriesForOrganisation();

  getRepositories.then((repositories) => {
    response.render('index', {
      title: 'Express',
      repositories: repositories
    })
  })
});

module.exports = router;
