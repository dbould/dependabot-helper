const { GraphQLClient, gql } = require('graphql-request')

class Github {

    constructor(githubUrl, githubRepository, githubOrganisation, githubToken) {
        this.githubUrl = githubUrl;
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
