# 📘 MongoDB CRUD API (Express + Mongoose)

A simple CRUD REST API built using Node.js, Express, and MongoDB (Mongoose).
This project demonstrates Create, Read, Update, and Delete operations using MongoDB Atlas and is deployed on Render.

🔗 Live Demo: https://mongodb-crud-wxhs.onrender.com/

--------------------------------------------------

## 🚀 Features

- Connects to MongoDB Atlas using Mongoose
- RESTful API structure
- Full CRUD functionality
- JSON-based request handling
- Deployed on Render

--------------------------------------------------

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Render (Deployment)

--------------------------------------------------

## ⚙️ Installation & Setup (Local)

1. Clone the repository

git clone https://github.com/your-username/your-repo-name.git  
cd your-repo-name

2. Install dependencies

npm install

3. Run the server

node index.js

Server will start at:
http://localhost:3000

--------------------------------------------------

## 🔗 API Endpoints

### Base Route  
GET /
Response: Hello World!

--------------------------------------------------

### 1. Get All Users  
GET /users  
Returns all users from database.

--------------------------------------------------

### 2. Get User by ID  
GET /users/id/:id  

Example:  
/users/id/1

--------------------------------------------------

### 3. Add Single User  
POST /adduser  

Body (JSON):

{
  "_id": 1,
  "name": "Harshit",
  "email": "harshit@gmail.com",
  "password": "123456"
}

--------------------------------------------------

### 4. Add Multiple Users  
POST /addusers  

Body (JSON Array):

[
  {
    "_id": 2,
    "name": "John",
    "email": "john@gmail.com",
    "password": "123456"
  }
]

--------------------------------------------------

### 5. Update Full User (PUT)  
PUT /users/id/:id  

Body (JSON):

{
  "name": "Updated Name",
  "email": "updated@gmail.com",
  "password": "newpass"
}

--------------------------------------------------

### 6. Partial Update (PATCH)  
PATCH /users/id/:id  

Body (JSON):

{
  "name": "Updated Name"
}

--------------------------------------------------

### 7. Delete User  
DELETE /users/id/:id  

--------------------------------------------------

## 🧩 Schema Structure

{
  _id: Number,
  name: String,
  email: String (required, unique, lowercase, minlength:6),
  password: String
}

--------------------------------------------------

## 🌍 Deployment (Render)

This project is deployed on Render.

Live URL:
https://mongodb-crud-wxhs.onrender.com/

--------------------------------------------------

## 📌 Notes

- Use environment variables (.env) for MongoDB connection in production.
- _id is manually assigned as Number in this project.

--------------------------------------------------

## 👨‍💻 Author

Harshit Kumar
