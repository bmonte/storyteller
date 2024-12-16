<div align="left" style="position: relative;">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="right" width="15%" style="margin: 10px 0 0 10px;">
<h1>Storyteller Dashboard</h1>
<p align="left">
	<img src="https://img.shields.io/github/last-commit/bmonte/storyteller?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/bmonte/storyteller?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/bmonte/storyteller?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)

---

## 📍 Overview

This project is a web-based dashboard built using Next.js, Zustand, Axios, and React. The application serves as an intuitive platform for content managers to view, organize, and update stories in a centralized interface.

- Next.js provides server-side rendering (SSR) for fast page loads and SEO optimization, ensuring a smooth and scalable user experience.
- Zustand is used for state management, offering a simple yet powerful way to store and manage the application’s state, particularly the data related to stories, without prop-drilling or complex context setups.
- Axios handles all HTTP requests, allowing the app to communicate efficiently with the backend API to fetch, create, update, and delete story data in real time.
- React is the core of the user interface, enabling a dynamic and interactive dashboard where users can filter, sort, and view detailed story information

---

## 📁 Project Structure

```sh
└── storyteller/
    ├── README.md
    ├── commitlint.config.js
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── logo.svg
    ├── src
    │   ├── app
    │   ├── assets
    │   ├── components
    │   ├── constants
    │   ├── hooks
    │   ├── libs
    │   ├── mocks
    │   ├── models
    │   ├── service
    │   ├── store
    │   └── utils
    ├── tsconfig.json
    └── vitest.config.ts
```

---

## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with storyteller, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### ⚙️ Installation

Install storyteller using one of the following methods:

**Build from source:**

1. Clone the storyteller repository:

```sh
❯ git clone git@github.com:bmonte/storyteller.git
```

2. Navigate to the project directory:

```sh
❯ cd storyteller
```

3. Change the Node version with NVM's help:

```sh
❯ nvm use
```

4. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

### 🤖 Usage

Run storyteller using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```

### 🧪 Testing

Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run test
```

---
