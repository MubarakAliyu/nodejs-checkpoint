# Advanced Back End Development — Node.js Checkpoint

This project contains the completed exercises for the **Advanced Back End Development: Node.js** checkpoint.

## Checkpoint Overview

The checkpoint covers basic Node.js programming, HTTP server creation, file system operations, password generation with an npm package, and sending emails with Nodemailer.

## Tasks Completed

### 1. Hello World

**File:** `hello-world.js`

Prints the following message to the console:

```text
HELLO WORLD
```

Run with:

```bash
node hello-world.js
```

### 2. Node.js HTTP Server

**File:** `server.js`

Creates an HTTP server using Node.js's built-in `http` module.

- Runs on port `3000`
- URL: `http://localhost:3000`
- Returns:

```html
<h1>Hello Node!!!!</h1>
```

Run with:

```bash
node server.js
```

### 3. File System Operations

**File:** `file-system.js`

Uses Node.js's built-in `fs` module to:

- Create `welcome.txt` containing `Hello Node`
- Create/read `hello.txt`
- Display the contents of `hello.txt` in the console

Run with:

```bash
node file-system.js
```

### 4. Random Password Generator

**File:** `password-generator.js`

Uses the `generate-password` npm package to generate a random password and print it to the console.

Run with:

```bash
node password-generator.js
```

### 5. Email Sender

**File:** `email-sender.js`

Uses **Nodemailer** to send an email through a configured email account.

Email credentials are loaded from environment variables and are not stored directly in the source code.

Run with:

```bash
node email-sender.js
```

## Technologies Used

- Node.js
- JavaScript
- Node.js `http` module
- Node.js `fs` module
- `generate-password`
- `nodemailer`
- `dotenv`

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

The project dependencies are defined in `package.json` and locked in `package-lock.json`.

## Environment Variables

Create a `.env` file in the project root for the email task:

```env
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password
EMAIL_TO=recipient@example.com
```

> **Security:** `.env` must not be committed to GitHub. Never expose email passwords, app passwords, API keys, or other credentials in the repository.

## Project Structure

```text
nodejs-checkpoint/
├── hello-world.js
├── server.js
├── welcome.txt
├── hello.txt
├── file-system.js
├── password-generator.js
├── email-sender.js
├── package.json
├── package-lock.json
├── .env
└── .gitignore
```

> `.env` and `node_modules/` are excluded from Git using `.gitignore`.

## Running the Exercises

Run each task independently with Node.js:

```bash
node hello-world.js
node server.js
node file-system.js
node password-generator.js
node email-sender.js
```

For the web server, open **http://localhost:3000** in a browser after starting `server.js`.

## Learning Outcomes

This checkpoint demonstrates practical use of:

- Node.js runtime fundamentals
- CommonJS modules with `require()`
- Core Node.js modules
- HTTP server creation
- File system operations
- npm packages and dependencies
- Environment variables
- Asynchronous callbacks
- Sending emails with Nodemailer

## Submission Checklist

- [x] Node.js installed and working
- [x] Hello World program completed
- [x] HTTP server completed on port 3000
- [x] File system tasks completed
- [x] Random password generator completed
- [x] Email sender tested successfully
- [x] `package.json` and `package-lock.json` included
- [x] `.gitignore` configured
- [x] Personal credentials removed from source files
- [ ] GitHub repository link submitted to GMC

---

**Advanced Back End Development: Node.js — Checkpoint**  
**Status:** Completed
