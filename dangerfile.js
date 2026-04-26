import { danger, fail, warn, message } from "danger";

// Check if PR is too big
const bigPRThreshold = 500;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn("This PR is quite large. Consider breaking it up.");
}

// Check for missing description
if (!danger.github.pr.body || danger.github.pr.body.length < 10) {
  fail("PR description is too short.");
}

// Check modified files
const modifiedFiles = danger.git.modified_files;

if (modifiedFiles.includes("package.json")) {
  message("Don't forget to update dependencies responsibly.");
}
