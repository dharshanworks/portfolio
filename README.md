# Dharshan R Portfolio

## Overview

A modern, professional personal technical portfolio for Dharshan R, a Full-Stack Developer. Built to showcase technical projects, internship experience, skills, and industry collaboration. The portfolio focuses on clean architecture, performance, accessibility, and a robust recruiter experience.

## Tech Stack

- **Framework**: React.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Bundler**: Vite
- **Icons**: Lucide React & Custom SVGs
- **Deployment**: [Add actual deployment platform later]

## Features

- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop displays.
- **Dark/Light Mode**: Robust theming system respecting system preferences and persisting in localStorage.
- **Data-Driven Architecture**: All portfolio data is abstracted into typed TypeScript objects for easy maintenance.
- **SEO Optimized**: Includes meta tags and semantic HTML structure.
- **Performance**: High Lighthouse scores utilizing lazy-loading concepts and minimal dependencies.
- **Accessibility**: ARIA labels, semantic tags, and keyboard-friendly navigation.

## Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Hero, ProjectCard, etc.)
├── data/             # Typed static data for the portfolio (portfolio.ts)
├── hooks/            # Custom React hooks (e.g., useDarkMode)
├── types/            # TypeScript interfaces and type definitions
├── utils/            # Utility functions (e.g., tailwind class merger)
├── App.tsx           # Main application structure
├── main.tsx          # Application entry point
└── index.css         # Global Tailwind CSS and base styles
```

## Running Locally

To run this project on your local machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

## Production Build

To create an optimized production build:

```bash
npm run build
```

## Deployment

[Add actual deployment platform later]

## Live Portfolio

[ADD LIVE PORTFOLIO URL]

## Projects

- **CloudCart**: A full-stack E-Commerce platform built with the MERN stack and deployed via Kubernetes on AWS EKS.
- **AI Call Center Copilot**: Real-time customer support platform using FastAPI, React, WebSockets, Whisper, and LLaMA 3.1.
- **Hospital Management System**: Java-based application managing patient records and RBAC using JDBC and MySQL.
- **Telecentric Image & System Architecture**: An industry-collaborated project for CareSoft focusing on system architecture.
