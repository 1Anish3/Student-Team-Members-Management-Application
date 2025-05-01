# 🚀 Team Member Manager App

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing team members with clean UI and dynamic routing. Add new members, view the team, and check detailed profiles — all through a smooth and intuitive interface.

---

## 📌 Features

- ✅ Fully functional CRUD operations  
- ✅ Clean and consistent layout with basic CSS  
- ✅ Image upload with file storage to `uploads/` folder  
- ✅ MongoDB integration for storing member data  
- ✅ RESTful API calls tested with browser/Postman  
- ✅ Navigation with React Router

---

## 🖥️ Pages

### 🏠 Home Page
- Displays team name as a header/banner
- Welcome message + team intro
- Buttons: `Add Member` and `View Members`

### ➕ Add Member Page
- Form with: Name, Role, Email, Contact Info, Image Upload
- Client-side validation
- Submits to: `POST /members`
- Backend stores data in MongoDB & saves images in `/uploads`

### 📄 View Members Page
- Fetches and displays all members using `GET /members`
- Shows Name, Role, and Profile Image
- Each member includes a `View Details` button

### 🧍 Member Details Page
- Accessed via dynamic routing using member ID
- Fetches from: `GET /members/:id`
- Displays full details including uploaded image

---

## 🔌 API Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/api/members`     | Retrieve all team members    |
| GET    | `/api/members/:id` | Retrieve a specific member   |
| POST   | `/api/members`     | Add a new member             |

---

## 📁 Folder Structure

