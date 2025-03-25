# Task Management App

This is a simple Task Management application built using **React (Vite) for frontend** and **Node.js (Express + MongoDB) for backend**.

## Features

- Create, update, delete, and mark tasks as completed.
- RESTful API with Express and MongoDB.
- Simple UI with React and Axios.
- Full CRUD operations.

---

## 🛠 Tech Stack

- **Frontend:** React (Vite), Axios
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB (via Mongoose)

---

## 🚀 Installation & Setup

### 1️⃣ Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/akashkumar30698/task.git
   cd /backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env` file:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

---

### 2️⃣ Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

---

## 📌 API Documentation

### Endpoints:

| Method   | Endpoint     | Description                        |
| -------- | ------------ | ---------------------------------- |
| `GET`    | `/tasks`     | Retrieve all tasks                 |
| `POST`   | `/tasks`     | Create a new task                  |
| `PUT`    | `/tasks/:id` | Update a task (edit/mark complete) |
| `DELETE` | `/tasks/:id` | Delete a task                      |

### Example API Requests

#### ✅ Get All Tasks

```bash
curl -X GET http://localhost:5000/tasks
```

#### ✅ Create a New Task

```bash
curl -X POST http://localhost:5000/tasks -H "Content-Type: application/json" -d '{"title":"New Task"}'
```

#### ✅ Update a Task

```bash
curl -X PUT http://localhost:5000/tasks/123 -H "Content-Type: application/json" -d '{"completed":true}'
```

#### ✅ Delete a Task

```bash
curl -X DELETE http://localhost:5000/tasks/123
```

---

## 🖥️ Screenshots
![Task Manager](https://res.cloudinary.com/dphrayb6o/image/upload/v1742892712/Screenshot_2025-03-25_135410_bha3ck.png)



## ⚡ Notes

- Make sure MongoDB is running before starting the backend.
- The frontend runs on `http://localhost:5173`, and the backend runs on `http://localhost:5000`.

Happy coding! 🚀

