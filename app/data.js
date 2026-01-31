const WSTG_DATA = [
  {
    section: "Information Gathering",
    overview: "Discover the application's architecture, technologies, and exposed surface.",
    tests: [
      { id: "WSTG-INFO-01", title: "Conduct search engine discovery and reconnaissance" },
      { id: "WSTG-INFO-02", title: "Fingerprint the web server" },
      { id: "WSTG-INFO-03", title: "Review webserver metafiles for information leakage" },
      { id: "WSTG-INFO-04", title: "Enumerate applications on webserver" },
      { id: "WSTG-INFO-05", title: "Review webpage content for sensitive information" }
    ]
  },
  {
    section: "Configuration and Deployment",
    overview: "Identify misconfigurations, insecure defaults, and exposed management interfaces.",
    tests: [
      { id: "WSTG-CONF-01", title: "Test network/host configuration" },
      { id: "WSTG-CONF-02", title: "Test application platform configuration" },
      { id: "WSTG-CONF-03", title: "Test file extensions handling" },
      { id: "WSTG-CONF-04", title: "Review old backup and unreferenced files" },
      { id: "WSTG-CONF-05", title: "Test administration interfaces" }
    ]
  },
  {
    section: "Identity Management",
    overview: "Validate identity lifecycle, account provisioning, and security controls.",
    tests: [
      { id: "WSTG-IDNT-01", title: "Test role definitions" },
      { id: "WSTG-IDNT-02", title: "Test user registration process" },
      { id: "WSTG-IDNT-03", title: "Test account provisioning process" },
      { id: "WSTG-IDNT-04", title: "Test account enumeration and guessable user account" },
      { id: "WSTG-IDNT-05", title: "Test weak or unenforced username policy" }
    ]
  },
  {
    section: "Authentication",
    overview: "Assess authentication strength, resilience to brute force, and session handling.",
    tests: [
      { id: "WSTG-ATHN-01", title: "Test credential transport over an encrypted channel" },
      { id: "WSTG-ATHN-02", title: "Test default credentials" },
      { id: "WSTG-ATHN-03", title: "Test for weak lock out mechanism" },
      { id: "WSTG-ATHN-04", title: "Test for bypassing authentication schema" },
      { id: "WSTG-ATHN-05", title: "Test remember me functionality" }
    ]
  },
  {
    section: "Authorization",
    overview: "Verify enforcement of access control across roles and resources.",
    tests: [
      { id: "WSTG-ATHZ-01", title: "Test directory traversal/file include" },
      { id: "WSTG-ATHZ-02", title: "Test for bypassing authorization schema" },
      { id: "WSTG-ATHZ-03", title: "Test for privilege escalation" },
      { id: "WSTG-ATHZ-04", title: "Test for insecure direct object references" },
      { id: "WSTG-ATHZ-05", title: "Test for unauthenticated access to sensitive functionality" }
    ]
  },
  {
    section: "Session Management",
    overview: "Ensure session identifiers and lifecycle controls are secure.",
    tests: [
      { id: "WSTG-SESS-01", title: "Test for session management schema" },
      { id: "WSTG-SESS-02", title: "Test for cookies attributes" },
      { id: "WSTG-SESS-03", title: "Test for session fixation" },
      { id: "WSTG-SESS-04", title: "Test for exposed session variables" },
      { id: "WSTG-SESS-05", title: "Test session timeout" }
    ]
  },
  {
    section: "Input Validation",
    overview: "Check for injection, encoding, and data integrity weaknesses.",
    tests: [
      { id: "WSTG-INPV-01", title: "Test for reflected cross site scripting" },
      { id: "WSTG-INPV-02", title: "Test for stored cross site scripting" },
      { id: "WSTG-INPV-03", title: "Test for SQL injection" },
      { id: "WSTG-INPV-04", title: "Test for XML injection" },
      { id: "WSTG-INPV-05", title: "Test for HTTP parameter pollution" }
    ]
  },
  {
    section: "Error Handling",
    overview: "Review error messages and logging for information leakage.",
    tests: [
      { id: "WSTG-ERRH-01", title: "Test error handling" },
      { id: "WSTG-ERRH-02", title: "Test stack traces and debug output" },
      { id: "WSTG-ERRH-03", title: "Review log integrity controls" },
      { id: "WSTG-ERRH-04", title: "Verify error pages for information disclosure" }
    ]
  },
  {
    section: "Cryptography",
    overview: "Validate encryption standards and key management.",
    tests: [
      { id: "WSTG-CRYP-01", title: "Test for weak SSL/TLS ciphers" },
      { id: "WSTG-CRYP-02", title: "Test for padding oracle weaknesses" },
      { id: "WSTG-CRYP-03", title: "Test for sensitive data exposure" },
      { id: "WSTG-CRYP-04", title: "Review key management and rotation" }
    ]
  },
  {
    section: "Business Logic",
    overview: "Validate that workflows and rules enforce expected controls.",
    tests: [
      { id: "WSTG-BUSL-01", title: "Test business logic data validation" },
      { id: "WSTG-BUSL-02", title: "Test ability to forge requests" },
      { id: "WSTG-BUSL-03", title: "Test workflow bypass" },
      { id: "WSTG-BUSL-04", title: "Test integrity checks" },
      { id: "WSTG-BUSL-05", title: "Test for circumvention of limits" }
    ]
  },
  {
    section: "Client-side",
    overview: "Review client-side logic and storage for exposure risks.",
    tests: [
      { id: "WSTG-CLNT-01", title: "Test for DOM-based cross site scripting" },
      { id: "WSTG-CLNT-02", title: "Test for client-side URL redirect" },
      { id: "WSTG-CLNT-03", title: "Test for browser storage" },
      { id: "WSTG-CLNT-04", title: "Test for cross origin resource sharing" }
    ]
  }
];

const STATUS_OPTIONS = [
  { value: "not-started", label: "Not started" },
  { value: "in-progress", label: "In progress" },
  { value: "pass", label: "Pass" },
  { value: "fail", label: "Fail" }
];
