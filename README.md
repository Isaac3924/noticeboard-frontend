# Secure Team Noticeboard - Client UI

A lightweight, professional React client designed to securely interface with a cloud-hosted AWS backend. This UI serves as the front-facing portal for the Secure Team Noticeboard proof-of-concept.

## Tech Stack
* **Framework:** React with TypeScript (scaffolded via Vite)
* **Styling:** Vanilla CSS with a focus on clean, enterprise-ready UI patterns
* **Integration:** Fetches data directly from an active AWS Elastic Beanstalk API

## Features
* Secure authentication form managing state for user credentials.
* Configured to accept and handle `HttpOnly` JWT cookies from cross-origin backend requests.
* Dynamic UI state updates based on network resolution and AWS database validation.