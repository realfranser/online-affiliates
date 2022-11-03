name: Feature PR
description: Create a pull request for a feature
title: "[ONP-XXX]: "
labels: ["enhancement"]
assignees:
  -
body:
  - type: markdown
    attributes:
      value: [JIRA TICKET](https://issues.corp.twilio.com/browse/ONP-XXX)
  - type: dropdown
    id: priority
    attributes:
      label: Priority
      description: Select the priority for the implementation of this new feature
      options:
        - Fire
        - High
        - Medium
        - Low
    validations:
      required: true
  - type: textarea
    id: feature-description
    attributes:
      label: Feature description
      description: Description of the new feature that should be implemented
      placeholder: Also describe what it shouldn't be implemented if needed
    validations:
      required: true
  - type: textarea
    id: references
    attributes:
      label: References and examples
      description: Reference links, previous commits, code snippets, etc.
      value: "ex. [Similar PR](https://code.hq.twilio.com/twilio/onboarding-personalization-service/pull/1)"
    validations:
      required: false
  - type: checkboxes
    id: requirements
    attributes:
      label: Requirements
      description: Before merging this PR, I (the assignee), ensure that these requirements have been fulfilled if necessary.
        - label: I have created unit tests for the most important changes implemented (appart from passing Sonarqube requirements)
          required: true
        - label: I have created adequate cluster tests and they work succesfully
          required: true
        - lalel: I have added the **dev-development** label and the code builds and deploys to **dev** succesfully
          required: true
        - label: I have crated/modified necessary infrastructure resources in terraform
        - label: I have updated the wiki or documented if necessary
  - type: textarea
    id: caveats
    attributes:
      label: Caveats
      description: Describe anything else that should be considered or has to take a further look regarding this feature
      render: shell

