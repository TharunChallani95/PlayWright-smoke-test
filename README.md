# Playwright Smoke Test Framework

A robust end-to-end test framework using Playwright, featuring a real-time counter app, diverse test cases, and screenshot evidence.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Playwright Tests](#running-playwright-tests)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Customization](#customization)
- [License](#license)

---

## Overview

This repository demonstrates how to build a real-time web application with automated end-to-end smoke testing using [Playwright](https://playwright.dev/).  
The project includes:
- **A live counter app** (Node.js + Express + Socket.io)
- **Comprehensive Playwright test suite** (functional, UI, and edge cases)
- **Automatic screenshots** from test runs

---

## Features

- **Live Counter Application:**  
  Real-time UI that lets users increment and reset a shared counter.

- **Comprehensive Tests:**  
  Functional, UI, negative scenarios, and error handling.

- **Automatic Screenshots:**  
  Captured at each test step and saved to `/screenshots`.

- **Structured Codebase:**  
  Clear separation of app, tests, configuration, and assets.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://npmjs.com/)
- [Git](https://git-scm.com/)

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/TharunChallani95/playWright-smoke-test.git
cd playWright-smoke-test
npm install
```

---

## Running the Application

Start the server:

```bash
npm start
```

Then open [`http://localhost:3000`](http://localhost:3000) in your browser to interact with the live counter app.

---

## Running Playwright Tests

To execute all Playwright tests and generate screenshots:

```bash
npm test
```

- Screenshots are saved in the `/screenshots` folder.
- An HTML test report is generated in `/playwright-report`.

---

## Project Structure

```plaintext
playWright-smoke-test/
├── app.js
├── package.json
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── config/
│   └── playwright.config.js
├── tests/
│   ├── counter.spec.js
│   ├── ui.spec.js
│   └── negative.spec.js
├── screenshots/
│   ├── initial.png
│   ├── incremented.png
│   ├── reset.png
│   ├── multi_increment.png
│   ├── ui_loaded.png
│   ├── negative_invalid_click.png
│   └── error_state.png
└── README.md
```

---

## Screenshots

Screenshots are automatically generated and saved in `/screenshots` for each test run.  
**Examples:**
- `initial.png`: App on initial load
- `incremented.png`: After increment
- `reset.png`: After reset
- `multi_increment.png`: After multiple increments
- `ui_loaded.png`: All UI elements visible
- `negative_invalid_click.png`: Negative scenario (invalid click)
- `error_state.png`: Error scenario

For an HTML report, check `/playwright-report` after running tests.

---

## Customization

- **Add/modify tests:**  
  Place new test files in the `/tests` folder.
- **Change Playwright config:**  
  Edit `/config/playwright.config.js` for timeouts, base URL, or reporters.
- **Update app logic/UI:**  
  Change files in `/public` or `app.js`.

---

## License

MIT © TharunChallani95
