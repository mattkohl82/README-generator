  // function to generate markdown for README
const generateMarkdown = data => {
  return `# ${ data.title }
          ## Description
          ### ${ data.description }
          ## Install
          ### ${ data.install }
          ## Useage
          ### ${ data.useage }
          ## Lincenses
          ### ${ data.license }
          ## Contributions
          ### ${ data.contributing }
          ## Tests
          ### ${ data.tests }
          ## Issues
          ### Any issues please contact ${ data.username } for GitHub or ${ data.email } for email
`;
}

module.exports = generateMarkdown;