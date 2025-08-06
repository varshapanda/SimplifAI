# SimplifAI

**SimplifAI** is a web application that simplifies complex concepts into clear, digestible explanations using Google's Gemini AI API. Designed with a minimalist interface and a focus on usability, the application enables users to submit queries and receive AI-generated responses in natural language — explained as if you are five years old.

---

## Overview

- **Frontend**: React 18, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI Provider**: Google Generative AI (Gemini Pro)
- **API Integration**: RESTful endpoint connecting frontend to Gemini API
- **Deployment Ready**: Supports deployment to services like Vercel (frontend) and Railway or Render (backend)

---

## Features

- Query-to-response flow with Gemini AI via Express backend
- Secure API key handling using environment variables
- Responsive, accessible user interface built with Tailwind CSS
- Graceful error handling and status feedback
- Fully decoupled frontend and backend architecture

---

## Requirements

- Node.js v16 or higher
- Gemini API key from [Google AI Studio](https://makersuite.google.com/)

---

## Setup

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/clarifai
cd simplifai
