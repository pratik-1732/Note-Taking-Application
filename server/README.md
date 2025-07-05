# 📝 Note Taking App - Backend

This is the backend for the Note Taking App built using **Node.js**, **Express**, and **MongoDB**. It handles user authentication, note creation, and dashboard data fetching.

## 🚀 Features

- 👤 User Sign In / Sign Up
- 📝 Create and Fetch Notes
- 🧑‍💻 User Dashboard Endpoint
- 🌐 RESTful API design

## 💠 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment configuration
- CORS and Body-Parser middleware

---

## ▶️ Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/note-taking-app.git
```

### 2. Navigate to the server folder:

```bash
cd note-taking-app/server
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Setup Environment Variables

Create a `.env` file in the `backend` directory:

> ✅ Ensure MongoDB is running locally or update `MONGO_URI` to your cloud MongoDB URI.

### 5. Start the development server:

```bash
npm run dev
```

The server will start at:
📍 [http://localhost:3000](http://localhost:3000)

---

## 🔗 API Endpoints

### User Routes:

```
POST   /api/signup         # Create a new user
POST   /api/signin         # Log in existing user
```

### Dashboard Route:

```
GET    /api/dashboard/:userId    # Get user details with notes
```

### Notes Route:

```
POST   /api/notes/create         # Create a new note for a user
```

---

## 📂 Folder Structure

```
backend/
├── controllers/
│   ├── authController.js
│   ├── noteController.js
│   └── dashboardController.js
├── models/
│   ├── user.js
│   └── note.js
├── routes/
│   ├── authRoutes.js
│   ├── noteRoutes.js
│   └── dashboardRoutes.js
├── .env
├── server.js
```

---

## 📌 Notes

- Use tools like Postman to test API endpoints.
- Ensure CORS is configured if connecting from frontend.
- Always validate and sanitize incoming data.

---

## 💬 Feedback

Feel free to raise an issue or contribute via pull requests. 😊
