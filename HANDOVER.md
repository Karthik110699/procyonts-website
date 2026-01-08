# Technical Handover Guide (CI/CD Team)

Project: **Procyon Technostructure Revamp (Node.js/React)**

## 1. Project Architecture
- **Frontend:** React (Vite)
- **Backend:** Node.js (Express)
- **Email Service:** Resend (API-based)

## 2. Environment Variables
The following variables must be configured in the cluster environment for the application to function correctly:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | The port the Node.js server listens on | `5000` |
| `RESEND_API_KEY` | (Optional if hardcoded) Secret API key for Resend | `re_123456...` |
| `NODE_ENV` | Environment mode | `production` |

## 3. Deployment Instructions

### Local Build
```bash
npm install
npm run build
```

### Production Execution
The entry point for the compiled server is `dist/index.js`.
```bash
npm start
```

## 4. Security & Independence Notes
- **No External PHP:** All external PHP dependencies have been removed.
- **Internal API:** Contact form data is handled by the internal `/api/contact` endpoint.
- **Supported Fields:**firstName, lastName, email, company, **phone**, **subject**, and message.
- **No Database:** This is currently a static content site; no database connection required.

## 5. Contact Destination
Form submissions are currently configured to be sent to: **karthi1106keyan@gmail.com** (Verified Resend Key required for external delivery).
