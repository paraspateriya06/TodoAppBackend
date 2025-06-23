✅ Todo App Backend

A simple and scalable **Todo App Backend** built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**. This app supports full CRUD operations — Create, Read, Update, and Delete todos.

🔗 GitHub Repository: [TodoAppBackend](https://github.com/paraspateriya06/TodoAppBackend)

---

## 🚀 Features

- Create new todos (`POST`)
- Get all todos (`GET`)
- Get a single todo by ID (`GET`)
- Update a todo by ID (`PUT`)
- Delete a todo by ID (`DELETE`)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Tooling:** dotenv, nodemon

---

## 📁 Folder Structure
.
├── controllers/ # Route logic
├── models/ # Mongoose schema
├── routes/ # API routes
├── .env # Environment variables
├── server.js # App entry point
└── package.json


---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/paraspateriya06/TodoAppBackend.git
cd TodoAppBackend

Create a .env file in the root directory:

env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tododb

