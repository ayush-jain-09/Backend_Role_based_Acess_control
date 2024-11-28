# Backend_Role_based_Acess_control
A backend project implementing Role-Based Access Control (RBAC) using Node.js, Express, and MongoDB. This project provides user authentication, role-based authorization, and secure access to resources.

Features
User authentication using JWT (JSON Web Tokens).
Password hashing with bcrypt.js.
Role-based authorization for restricted routes.
Secure database integration with MongoDB.
Modular architecture for scalability and maintainability.
Tech Stack
Node.js: Runtime environment.
Express.js: Web framework.
MongoDB: NoSQL database.
Mongoose: ODM for MongoDB.
bcrypt.js: Password hashing.
jsonwebtoken: Token-based authentication.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/ayush-jain-09/Backend_Role_based_Acess_control.git
Navigate to the project directory:

bash
Copy code
cd Backend_Role_based_Acess_control
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Add the following variables:
plaintext
Copy code
PORT=7002
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
Run the server:

bash
Copy code
npm run dev
The server will start on http://localhost:7002.

API Endpoints
Authentication
1. Register User
POST /api/auth/register
Request Body:
json
Copy code
{
  "username": "example",
  "password": "password123",
  "role": "admin"
}
Response:
json
Copy code
{
  "message": "User registered with username example"
}
2. Login User
POST /api/auth/login
Request Body:
json
Copy code
{
  "username": "example",
  "password": "password123"
}
Response:
json
Copy code
{
  "token": "your_jwt_token"
}

