const { GraphQLClient, gql } = require('graphql-request')

class Github {

    constructor(githubRepository, githubOrganisation, githubToken) {
        this.githubRepository = githubRepository;
        this.githubOrganisation = githubOrganisation;
        this.githubToken = githubToken;
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

        const endpoint = 'https://api.github.com/graphql';

        const graphQLClient = new GraphQLClient(endpoint, {
            headers: {
                authorization: 'Bearer ' + this.githubToken,
            },
        })

        const data = await graphQLClient.request(query).catch((error) => console.error(error))

        return data;
    }
}

module.exports = Github;
