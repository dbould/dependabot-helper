const githubServiceImport = require('../../service/Github');
const githubService = new githubServiceImport(
    'http://127.0.0.1:9000/mock/get-vulnerabilities/',
    'moo',
    'may-den'
);

test('it returns some alerts', () => {
    githubService.getAlertsForOrganisation().then((alerts) => {
        expect(mooResponse())
    })
});

function mooResponse() {
    return {
        "data": {
            "repository": {
                "vulnerabilityAlerts": {
                    "nodes": [
                        {
                            "createdAt": "2019-12-08T01:18:46Z",
                            "dismissedAt": null,
                            "securityVulnerability": {
                                "package": {
                                    "name": "serialize-javascript"
                                },
                                "advisory": {
                                    "description": "Versions of `serialize-javascript` prior to 2.1.1 are vulnerable to Cross-Site Scripting (XSS). The package fails to sanitize serialized regular expressions. This vulnerability does not affect Node.js applications.\n\n\n## Recommendation\n\nUpgrade to version 2.1.1 or later."
                                }
                            }
                        },
                        {
                            "createdAt": "2020-04-03T03:29:54Z",
                            "dismissedAt": null,
                            "securityVulnerability": {
                                "package": {
                                    "name": "kind-of"
                                },
                                "advisory": {
                                    "description": "Versions of `kind-of` 6.x prior to 6.0.3 are vulnerable to a Validation Bypass. A maliciously crafted object can alter the result of the type check, allowing attackers to bypass the type checking validation. \n\n\n## Recommendation\n\nUpgrade to versions 6.0.3 or later."
                                }
                            }
                        }
                    ]
                }
            }
        }
    };
}
