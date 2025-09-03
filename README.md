# Task Manager

A simple Task Manager app built with **Express.js** (backend) and **React.js** (frontend).

## Features
- Create a new task (title, description, status)
- List all tasks
- Update task status (Pending → Completed)
- Delete a task

## How to Run

### Backend
```bash
cd backend
npm install
nodemon index.js
```
Runs on:` http://localhost:3000`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on: `http://localhost:5173`

###API Endpoints
-`GET /api/tasks`
-`POST /api/tasks`
-`PUT /api/tasks/:id`
-`DELETE /api/tasks/:id`