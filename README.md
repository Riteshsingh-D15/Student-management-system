# 🎓 Student Manager (MongoDB CRUD App)

A full-stack web application to manage student records using **Node.js, Express, and MongoDB** with a clean frontend UI.

---

## 🚀 Features

* ➕ Add new students
* 📖 View all students
* ✏️ Update student details
* ❌ Delete students
* 🎨 Modern responsive UI

---

## 🛠️ Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript (Vanilla)

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

---

## 📂 Project Structure

```
project-folder/
│
├── server.js        # Backend (API)
├── index.html       # Frontend UI
├── script.js        # Frontend Logic
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-url>
cd project-folder
```

### 2. Install dependencies

```
npm install
```

### 3. Start MongoDB

Make sure MongoDB is running locally:

```
mongodb://localhost:27017
```

### 4. Run the server

```
node server.js
```

### 5. Open frontend

Open `index.html` in your browser
(or use Live Server)

---

## 🔗 API Endpoints

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| POST   | /students     | Create student   |
| GET    | /students     | Get all students |
| PUT    | /students/:id | Update student   |
| DELETE | /students/:id | Delete student   |

---

## 📸 UI Overview

* Simple form to add students
* Card-based list display
* Update & Delete buttons for each student

---

## 🧠 Future Improvements

* 🔍 Search & filter students
* 📝 Edit modal (instead of prompt)
* 🔐 Authentication (login/signup)
* ⚛️ React frontend upgrade
* 🌐 Deployment (Render / Vercel / MongoDB Atlas)

---

## 👨‍💻 Author

Developed by **Ritesh Singh**

---

## 📄 License

This project is open-source and free to use.
