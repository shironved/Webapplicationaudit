# Webapplicationaudit

Security audit performed for the e-commune site as a project to find vulnerabilities, eradicate, and report.

## OWASP WSTG Pentest Planner

This repository now includes a lightweight web pentesting application based on the OWASP Web Security Testing Guide (WSTG). The app provides a checklist-style planner so you can track progress across WSTG categories, mark statuses, and filter or search tests.

### Features

- WSTG category overview cards with test IDs and descriptions.
- Status tracking per test (Not started, In progress, Pass, Fail).
- Search and filter controls.
- Local storage persistence so progress is remembered per browser.

### Run locally

Open the app in any modern browser:

```bash
cd app
python3 -m http.server 8080
```

Then visit http://localhost:8080 in your browser.
