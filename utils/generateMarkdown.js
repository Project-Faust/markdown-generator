// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  } else if (license === "GPL 3.0") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else if (license === "BSD 3") {
    return "https://img.shields.io/badge/license-BSD%203--Clause-blue.svg";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const {
    authorName,
    authorGithub,
    authorEmail,
    projectName,
    projectDescription,
    projectInstallation,
    projectContribution,
    projectUsage,
    projectTesting,
    projectLicense
  } = data
  return `
  <img alt=License: ${license}" src="${licenseBadge}><br/>
  ## Table of Contents
  *[Author](#authorName)
  *[Project Title](#projectName)
  *[Project Description](#projectDescription)
  *[Installation Instructions](#projectInstallation)
  *[Usage Information](#projectUsage)
  *[Contribution Guidelines](#projectContribution)
  *[Test Instructions](#projectTesting)
  *[License](#projectLicense)
  *[Support](#projectEmail)
  # Project Creator
  ${authorName}
  # Project Name
  ${projectName}
  ## Description
  ${projectDescription}
  ## Installation Instructions
  ${projectInstallation}
  ## Usage
  ${projectUsage}
  ## Contribution Guidelines
  ${projectContribution}
  ## Testing
  ${projectTesting}
  ## License
  <img alt="License: ${projectLicense}" src="${licenseBadge}"></br>
  This project is licensed under the terms of the ${projectLicense} license. Click <a href="${licenseLink}">here</a> to view the full license text.
  ## Support
  ${authorEmail}
  ## Questions
  For questions or feedback, please reach out to me on GitHub <a href="https://github.com/${authorGithub}">here</a>.
    `;
}

module.exports = generateMarkdown;
