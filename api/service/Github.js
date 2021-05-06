const { GraphQLClient, gql } = require('graphql-request')
const https = require('https')

class Github {

    constructor(githubUrl, githubRepository, githubOrganisation, githubToken) {
        this.githubUrl = githubUrl;
        this.githubRepository = githubRepository;
        this.githubOrganisation = githubOrganisation;
        this.githubToken = githubToken;
    }

    async getRepositoriesForOrganisation() {
        var options = {
            hostname: 'api.github.com',
            port: 443,
            path: '/orgs/may-den/repos',
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + this.githubToken,
                'Content-Type': 'application/json',
                'User-Agent': 'dependabot-helper'
            }
        }

        let responseBody = '';

        let requestPromise = new Promise(function(resolve, reject) {
            let request = https.get(options, (response) => {
                let body = '';

                response.on('data', function(chunk) {
                    body += chunk;
                });

                response.on('end', function() {
                    responseBody = JSON.parse(body);
                    resolve(responseBody)
                });
            })
            request.end()
        })

        return requestPromise.then(() => {
            return responseBody;
        })
    }

    async getAlertsForOrganisation() {
        const query = gql`{
                repository(name: "${this.githubRepository}", owner: "${this.githubOrganisation}") {
                    vulnerabilityAlerts(first: 100) {
                        nodes {
                            createdAt
                            dismissedAt
                            securityVulnerability {
                                package {
                                    name
                                }
                                advisory {
                                    description
                                }
                            }
                        }
                    }
                }
        }`

        const graphQLClient = new GraphQLClient(this.githubUrl, {
            headers: {
                authorization: 'Bearer ' + this.githubToken,
            },
        })

        const data = await graphQLClient.request(query).catch((error) => console.error(error))

        return data;
    }
}

module.exports = Github;
