class Github {
    constructor() {

    }

    getVulnerabilities(repository, owner, authorization) {
        //if owner is set to ?
        //else return bad repository response

        //if owner is set to ?
        //else return bad owner response

        //if authorization is set to ?
        //else return bad auth response
        switch (repository) {
            case "moo":
                return this.mooResponse();
            case "cluck":
                return this.cluckResponse();
                break;
            default:
                return this.repositoryNotFoundResponse();
        }
    }

    mooResponse() {
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

    cluckResponse() {
        return {
            "data": {
                "repository": {
                    "vulnerabilityAlerts": {
                        "nodes": [
                            {
                                "createdAt": "2021-03-20T10:09:15Z",
                                "dismissedAt": null,
                                "securityVulnerability": {
                                    "package": {
                                        "name": "ssri"
                                    },
                                    "advisory": {
                                        "description": "ssri 5.2.2-8.0.0, fixed in 8.0.1, processes SRIs using a regular expression which is vulnerable to a denial of service. Malicious SRIs could take an extremely long time to process, leading to denial of service. This issue only affects consumers using the strict option."
                                    }
                                }
                            },
                            {
                                "createdAt": "2021-03-30T07:41:57Z",
                                "dismissedAt": null,
                                "securityVulnerability": {
                                    "package": {
                                        "name": "y18n"
                                    },
                                    "advisory": {
                                        "description": "### Overview\n\nThe npm package `y18n` before versions 3.2.2, 4.0.1, and 5.0.5 is vulnerable to Prototype Pollution. \n\n### POC\n\n```\nconst y18n = require('y18n')();\n\ny18n.setLocale('__proto__');\ny18n.updateLocale({polluted: true});\n\nconsole.log(polluted); // true\n```\n\n### Recommendation\n\nUpgrade to version 3.2.2, 4.0.1, 5.0.5 or later."
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        }
    }

    woofResponse() {
        return {
            "data": {
                "repository": {
                    "vulnerabilityAlerts": {
                        "nodes": [
                            {
                                "createdAt": "2020-04-04T16:23:55Z",
                                "dismissedAt": null,
                                "securityVulnerability": {
                                    "package": {
                                        "name": "acorn"
                                    },
                                    "advisory": {
                                        "description":"Affected versions of acorn are vulnerable to Regular Expression Denial of Service.\nA regex in the form of /[x-\�]/u causes the parser to enter an infinite loop.\nThe string is not valid UTF16 which usually results in it being sanitized before reaching the parser.\nIf an application processes untrusted input and passes it directly to acorn,\nattackers may leverage the vulnerability leading to Denial of Service."
                                    }
                                }
                            },
                            {
                                "createdAt": "2020-04-05T06:50:41Z",
                                "dismissedAt": null,
                                "securityVulnerability": {
                                    "package": {
                                        "name": "minimist"
                                    },
                                    "advisory": {
                                        "description": "Affected versions of `minimist` are vulnerable to prototype pollution. Arguments are not properly sanitized, allowing an attacker to modify the prototype of `Object`, causing the addition or modification of an existing property that will exist on all objects.  \nParsing the argument `--__proto__.y=Polluted` adds a `y` property with value `Polluted` to all objects. The argument `--__proto__=Polluted` raises and uncaught error and crashes the application.  \nThis is exploitable if attackers have control over the arguments being passed to `minimist`.\n\n\n\n## Recommendation\n\nUpgrade to versions 0.2.1, 1.2.3 or later."
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        }
    }

    missingRepositoryResponse() {
        return {
            "errors": [
                {
                    "path": [
                        "query",
                        "repository"
                    ],
                    "extensions": {
                        "code": "missingRequiredArguments",
                        "className": "Field",
                        "name": "repository",
                        "arguments": "name"
                    },
                    "locations": [
                        {
                            "line": 2,
                            "column": 5
                        }
                    ],
                    "message": "Field 'repository' is missing required arguments: name"
                }
            ]
        }
    }

    missingOwnerResponse() {
        return {
            "errors": [
                {
                    "path": [
                        "query",
                        "repository"
                    ],
                    "extensions": {
                        "code": "missingRequiredArguments",
                        "className": "Field",
                        "name": "repository",
                        "arguments": "owner"
                    },
                    "locations": [
                        {
                            "line": 2,
                            "column": 5
                        }
                    ],
                    "message": "Field 'repository' is missing required arguments: owner"
                }
            ]
        }
    }

    unAuthorizedResponse() {
        return {
            "message": "This endpoint requires you to be authenticated.",
            "documentation_url": "https://docs.github.com/v3/#authentication"
        }
    }

    repositoryNotFoundResponse() {
        return {
            "data": {
                "repository": null
            },
            "errors": [
                {
                    "type": "NOT_FOUND",
                    "path": [
                        "repository"
                    ],
                    "locations": [
                        {
                            "line": 2,
                            "column": 5
                        }
                    ],
                    "message": "Could not resolve to a Repository with the name 'cluck cluck mooooo'."
                }
            ]
        }
    }
}

module.exports = Github;
