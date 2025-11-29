# 📚 Book Management MERN Application

A full-stack **MERN (MongoDB, Express, React, Node.js)** application for managing a personal book library.  
Users can **Add, View, and Delete** books through a simple and responsive interface.  
Backend powered by **Express + MongoDB Atlas**, and frontend built with **React + Axios**.

---

## 🚀 Tech Stack

### **Frontend**
- React.js  
- Axios  
- Create React App (CRA)

### **Backend**
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  

---

## 📁 Folder Structure

📦 kivro_task2
│
├── 📄 README.md
├── 📄 .gitignore
│
├── 📂 book-api # Backend (Node + Express + MongoDB)
│ ├── index.js # Server entry point
│ ├── models/
│ │ └── Book.js # Mongoose schema
│ ├── routes/
│ │ └── book.js # CRUD routes
│ └── package.json
│
└── 📂 book-frontend # Frontend (React Application)
├── src/
│ ├── App.js # Main logic
│ ├── components/
│ │ ├── BookList.js
│ │ └── BookForm.js
│ └── api.js # Axios instance
└── package.json

### 🖥 Backend Setup — book-api
## 2️⃣ Install Dependencies
cd book-api
npm install

## 3️⃣ Create .env File

## 4️⃣ Start Backend
node index.js


Backend runs at:
👉 http://localhost:3000

### 🌐 Frontend Setup — book-frontend
## 5️⃣ Install Dependencies
cd ../book-frontend
npm install

## 6️⃣ Start React App
npm start


Frontend runs at:
👉 http://localhost:3000

(CRA will proxy API requests to backend)

### 📡 API Endpoints
Method	Endpoint	Description
GET	/books	Get all books
POST	/books	Add a new book
DELETE	/books/:id	Delete a book

Sample Book JSON:

{
  "title": "Atomic Habits",
  "author": "James Clear",
  "year": 2018
}