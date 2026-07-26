# EduHub — E-Learning Platform

A full-stack e-learning web application where students can browse courses, enroll, and learn through video lectures. The platform includes secure authentication, email verification, course enrollment, video streaming, and an admin dashboard for managing courses, users, and lectures.

## 🌐 Live Demo

**Frontend:** https://edu-hub-zeta.vercel.app/

---

## 📸 Screenshots

| Home | Courses | Login | Admin |
|------|---------|-------|-------|
| ![Home](./screenshots/home1.png) | ![Courses](./screenshots/Courses.png) | ![Login](./screenshots/Login.png) | ![Admin](./screenshots/Admin.png) |

---

## ✨ Features

- Browse and search available courses
- User registration with Email OTP verification
- Secure JWT-based authentication
- Course enrollment
- Payment integration
- Video lecture streaming
- Forgot password & password reset via email
- Responsive user interface
- Admin dashboard for:
  - Managing courses
  - Managing users
  - Managing lectures

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Vite, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcrypt |
| Email Service | Nodemailer (Gmail) |
| File Upload | Multer |

---

## 📂 Project Structure

```text
E-learningWeb/
├── frontend/       # React + Vite application
└── server/         # Node.js + Express REST API
```

---

## 🚀 Local Setup

### Prerequisites

- Node.js v18 or above
- MongoDB Atlas account

### 1. Clone the Repository

```bash
git clone <repository-url>
cd E-learningWeb
```

### 2. Backend Setup

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
cp .env.example .env
npm run dev
```

---

## 🔑 Environment Variables

### Backend (`server/.env`)

| Variable | Description |
|----------|-------------|
| `DB` | MongoDB Atlas connection string |
| `Jwt_Sec` | JWT signing secret |
| `Activation_Secret` | Email activation token secret |
| `Forgot_Secret` | Forgot password token secret |
| `Gmail` | Gmail account used for sending emails |
| `Password` | Gmail App Password |
| `frontendurl` | Frontend deployment URL for CORS |

### Frontend (`frontend/.env`)

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend deployment URL |

---

## 🌍 Deployment

### Frontend

- **Platform:** Vercel
- **Live URL:** https://edu-hub-zeta.vercel.app/

### Backend

- **Platform:** Render
- Configure all environment variables listed above before deployment.

---

## 👥 Team

| Name | Role |
|------|------|
| **Sanika Deshkar** | Full Stack Developer • GitHub: https://github.com/Sanika-deshkar • LinkedIn: https://www.linkedin.com/in/sanika-deshkar/ |
| **Anushka Patil** | Developer |
| **Samruddhi Raut** | Developer |

---

## 📌 Future Enhancements

- Course progress tracking
- Student certificates
- Reviews and ratings
- Wishlist feature
- Instructor dashboard
- Analytics and reporting
- Multiple payment gateways

---

## 📄 License

This project is developed for educational purposes.
