# TripAI ✈️

TripAI is an AI-powered travel itinerary generator that transforms flight tickets, hotel bookings, and travel documents into organized day-by-day itineraries.

## Features

- 📄 Upload PDFs and images of travel documents
- 🤖 AI-powered itinerary generation
- 🛫 Flight and trip information extraction
- 📅 Day-by-day travel planning
- 📤 Share itineraries using unique links
- 📥 Export itineraries as PDF
- ☁️ Cloudinary file storage
- 🔒 JWT authentication

## Tech Stack

### Frontend

- React
- Tailwind CSS
- React Router
- Zustand
- Axios

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary
- Tesseract OCR
- PDF.js

## Installation

### Clone repository

```bash
git clone https://github.com/mhw3011/tripai.git
cd tripai
```

### Backend

```bash
cd server
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=
JWT_SECRET=
OPENAI_API_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

CLIENT_URL=http://localhost:5173
```

Start server

```bash
npm run dev
```

### Frontend

```bash
cd client
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend

```bash
npm run dev
```

## Screenshots

(Add screenshots here)

## Future Improvements

- Google Maps integration
- Weather information
- Expense tracking
- Multi-language support
- User preferences and recommendations

## Author

**Munauvar Warsi**

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN

---

TripAI — AI-powered travel planning.
