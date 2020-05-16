// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
          ## ${data.description}
          ## ${data.license}


`;
}

module.exports = generateMarkdown;
