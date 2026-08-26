# PROMPTIX - Custom AI Automation Consulting

PROMPTIX is a premium marketing website with a Node.js/Express backend for AI automation consulting services.

## Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/sagar2346/PROMPTIX.git
cd PROMPTIX
```

### 2. Setup Backend

```bash
# Copy the example env file and configure it
cp backend/.env.example backend/.env

# Edit backend/.env with your MongoDB URI and secrets

# Install dependencies
cd backend
npm install
cd ..
```

### 3. Run the Application

```bash
# From the root directory
npm start
```

The app will be available at `http://localhost:5000`.

## Project Structure

```
PROMPTIX/
├── package.json              # Root package with start scripts
├── backend/
│   ├── package.json          # Backend dependencies
│   ├── server.js             # Express server entry point
│   ├── .env.example          # Environment variable template
│   └── routes/
│       └── auth.js           # Authentication API routes
└── Promptix/                 # Frontend (static HTML/CSS/JS)
    ├── index.html            # Home page
    ├── benefits.html         # Benefits page
    ├── how-it-works.html     # How it works page
    ├── plans.html            # Pricing page
    ├── faq.html              # FAQ page
    ├── services.html         # Services page
    ├── style.css             # Global stylesheet
    └── [images]              # Branding assets
```

## Environment Variables

Copy `backend/.env.example` to `backend/.env` and configure:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/promptix` |
| `JWT_SECRET` | Secret for JWT tokens | - |
| `ADMIN_EMAIL` | Admin login email | `admin@promptix.com` |
| `ADMIN_PASSWORD` | Admin login password | - |

## Frontend Only

To preview just the frontend without the backend:

```bash
cd Promptix
python -m http.server 8000
# Open http://localhost:8000
```

## Tech Stack

- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT Auth
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (no framework)
- **Styling**: CSS Custom Properties, Google Fonts (Outfit + DM Sans)

## License

MIT
