# 📘 Students API  

🔗 **Live Deployment:** https://mongodb-crud-1-2b07.onrender.com  

A RESTful Course Enrollment API built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.  
This project allows users to manage student enrollments with proper schema validation and structured CRUD operations.

---

## 🚀 Features  

✔ Add single student  
✔ Add multiple students (bulk insert)  
✔ Get all students  
✔ Get student by ID  
✔ Get students by course  
✔ Update student details  
✔ Delete student  
✔ Schema validation using Mongoose  
✔ Proper status codes & error handling  
✔ Async/Await + Try/Catch implementation  

---

## 🛠️ Tech Stack  

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Deployment:** Render  

---

## 📂 Project Structure  

```
project
│
├── server.js
├── package.json
└── models/
    └── student.model.js
```

---

## 🧩 Database Schema  

### Student Schema  

| Field     | Type    | Validation |
|------------|----------|-------------|
| name       | String   | required, minlength 3 |
| email      | String   | required, unique, lowercase |
| password   | String   | required, minlength 6 |
| age        | Number   | required, min 18 |
| role       | String   | enum ["Student","Mentor","Admin"], default "Student" |
| course     | String   | enum ["MERN","Java","Python","Data Science"] |
| isActive   | Boolean  | default true |

---

## 📌 Example Data  

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@gmail.com",
  "password": "123456",
  "age": 22,
  "role": "Student",
  "course": "MERN"
}
```

---

## 📡 API Endpoints  

### 1️⃣ Add Student  
**POST** `/students`  
Adds a new student.

---

### 2️⃣ Add Multiple Students  
**POST** `/students/bulk`  
Insert multiple students using `insertMany()`.

---

### 3️⃣ Get All Students  
**GET** `/students`  
Returns all students.

---

### 4️⃣ Get Student By ID  
**GET** `/students/:id`  
Returns a single student.  

If not found:  
```
Student not found
```

---

### 5️⃣ Get Students By Course  
**GET** `/students/course/:courseName`  

Example:  
```
/students/course/MERN
```

---

### 6️⃣ Update Student  
**PUT** `/students/:id`  
Updates student details and returns updated student.

---

### 7️⃣ Delete Student  
**DELETE** `/students/:id`  
Deletes student and returns deleted student.

---

## 🧪 Sample Request Body  

```json
{
  "name": "Amit Kumar",
  "email": "amit@gmail.com",
  "password": "123456",
  "age": 21,
  "role": "Student",
  "course": "Java"
}
```

---

## ⚙️ Installation & Setup  

```bash
# Clone repo
git clone <your-repo-link>

# Go to folder
cd project

# Install dependencies
npm install

# Run server
npm start
```

---

## 📌 Requirements Followed  

✔ Express used  
✔ Mongoose used  
✔ Schema validation implemented  
✔ Async/Await used  
✔ Try-Catch used  
✔ Proper status codes used  

---

## 👨‍💻 Author  

**Harshit Kumar**