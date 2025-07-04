# ✅ Task Buddy - Personal Task Manager

Task Buddy is a lightweight and responsive React-based task manager built as part of an internship assignment. It allows users to log in with a simple username and manage their personal tasks without needing any backend or external libraries.

---

## 🚀 Features

- 🔐 Local login with just a username
- 📝 Add tasks with title and optional description
- ✅ Mark tasks as completed or pending
- 🗑 Delete tasks anytime
- 🗂 Filter tasks by: All, Completed, Pending
- 💾 Tasks saved in localStorage per user
- 🎨 Clean and modern UI

---

## 🛠 Tech Stack

- React (with Hooks)
- Vite
- React Router DOM
- LocalStorage (custom utility)
- Plain CSS (no UI frameworks)

---

## 📁 Folder Structure

src/
├── components/
│ ├── Dashboard.jsx
│ ├── Login.jsx
│ ├── TaskFilter.jsx
│ ├── TaskForm.jsx
│ ├── TaskItem.jsx
│ └── TaskList.jsx
├── utils/
│ └── localStorage.js
├── styles/
│ └── App.css
├── App.jsx
└── main.jsx

yaml
Copy
Edit

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/manaspandeyy/Task-Buddy.git
cd Task-Buddy
npm install
npm run dev
