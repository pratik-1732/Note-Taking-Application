# 📝 Note Taking App - Frontend

This is the frontend of the Note Taking App built using **React.js**. It allows users to sign up, sign in, view their dashboard, and create notes via a popup interface.

## 🚀 Features

- 🧑‍💻 User Dashboard
- 📝 Create Notes via Popup
- 📱 Responsive Design using Tailwind CSS
- 🔗 Axios for API requests

## 💠 Tech Stack

- React.js
- Tailwind CSS
- Axios
- React Router DOM

---

## ▶️ Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/note-taking-app.git
```

### 2. Navigate to the client folder:

```bash
cd note-taking-app/client
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Setup Environment Variables

Create a `.env` file in the `frontend` directory:

> ✅ Make sure your backend is running on the same port as defined in .env file.

### 5. Start the development server:

```bash
npm run dev
```

Visit the app at:
📍 [http://localhost:5173](http://localhost:5173)

---

## 📂 Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Cards.jsx
│   │   └── Popup.jsx
│   ├── App.jsx
│   ├── main.jsx
├── .env
├── index.css
├── tailwind.config.js
```

---

## 📌 Notes

- Ensure that the backend is running **before** you try to fetch dashboard data.
- If the API doesn't respond, check CORS configuration on the backend.

---

## 💬 Feedback

If you find a bug or have a feature request, feel free to open an issue or pull request. 😊
