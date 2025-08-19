# 🏫 School Management API

A simple **Node.js + Express + MySQL REST API** for managing schools.  
This project allows you to:

- Add new schools with location details  
- Retrieve a list of schools sorted by proximity to the user’s location  

---

## 📂 Project Structure
school-management-api/
│── src/
│ ├── config/
│ │ └── db.js # Database connection
│ ├── controllers/
│ │ └── schoolController.js # Business logic (add/list schools)
│ ├── routes/
│ │ └── schoolRoutes.js # API route definitions
│ ├── utils/
│ │ └── distance.js # Utility function for calculating distance
│── .env # Environment variables
│── index.js # Entry point (server setup)
│── package.json # Dependencies & scripts
│── School_Management.postman_collection.json # Postman collection

yaml
Copy
Edit

---

## 🛠️ Tech Stack
- **Node.js** (Express.js framework)  
- **MySQL** (Database)  
- **dotenv** (Environment variables)  
- **body-parser** (Request parsing)  

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/abhishek19kahar/school-management-api.git
cd school-management-api
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
PORT=5000
4. Setup Database
Run the following SQL in MySQL:

sql
Copy
Edit
CREATE DATABASE school_management;

USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
5. Start the Server
bash
Copy
Edit
npm start
Server will run on:
👉 http://localhost:5000

🚀 API Endpoints
1. Add School
Endpoint: POST /addSchool
Payload:

json
Copy
Edit
{
  "name": "Green Valley School",
  "address": "123 Main Street, Mumbai",
  "latitude": 19.076,
  "longitude": 72.8777
}
Response:

json
Copy
Edit
{
  "message": "School added successfully",
  "id": 1
}
2. List Schools by Proximity
Endpoint: GET /listSchools?latitude=19.07&longitude=72.87

Response:

json
Copy
Edit
[
  {
    "id": 1,
    "name": "Green Valley School",
    "address": "123 Main Street, Mumbai",
    "latitude": 19.076,
    "longitude": 72.8777,
    "distance": 0.5
  }
]
🧪 Testing with Postman
Import the file: School_Management.postman_collection.json

Test both Add School and List Schools APIs

👨‍💻 Developed by Abhishek Kahar
