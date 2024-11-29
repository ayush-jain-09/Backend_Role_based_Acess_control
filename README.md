
# Backend Role-Based Access Control (RBAC)

A backend project implementing Role-Based Access Control (RBAC) using Node.js, Express, and MongoDB. This project provides user authentication, role-based authorization, and secure access to resources.


## Features

- User authentication using JWT (JSON Web Tokens).
- Password hashing with bcrypt.js
- Role-based authorization for restricted routes.
- Secure database integration with MongoDB.

## Tech Stack

- Node.js: Runtime environment.
- Express.js: Web framework.
- MongoDB: NoSQL database.
- Mongoose: ODM for MongoDB.
- bcrypt.js: Password hashing.


## Installation

1. Clone the repository:

```bash
 git clone https://github.com/ayush-jain-09/Backend_Role_based_Acess_control.git
```
2. Navigate to the project directory:

```bash
 cd Backend_Role_based_Acess_control
```
3. Install dependencies:

```bash
npm install
```
4. Set up environment variables:

Create a .env file in the root directory.

Add the following variables:
```plaintext
PORT=7002
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```
5. Run the server:

```bash
npm run dev
```
The server will start on http://localhost:7002.
    
## API Documentation

Base URL: 
For local development: http://localhost:7002
Authentication Routes
1. Register a User

URL: /api/auth/register

Method: POST

Description: Registers a new user with a username, password, and role.

Request Body:
```
  {
"username": "exampleUser",
"password": "examplePassword",
"role": "admin"
}
```


Response (Success):
```
{
"message": "User registered with username exampleUser"
}
```

Response (Error):
```
{
"message": "Something went wrong"
}
```

2. Login a User
URL: /api/auth/login

Method: POST

Description: Authenticates a user and returns a JWT token.

Request Body:
```
{
"username": "exampleUser",
"password": "examplePassword"
}
```
Response (Success):
```
{
"token": "your_jwt_token"
}
```
Response (Error):
```
{
"message": "Invalid credentials"
}
```

Role-Based Routes
1. Admin Route
URL: /api/users/admin

Method: GET

Description: Accessible only to users with the admin role.

Headers:

Authorization: Bearer <your_jwt_token>

Response (Success):
```
{
"message": "Welcome Admin"
}
```
Response (Error):
```
{
"message": "Access denied"
}
```

2. Manager Route
URL: /api/users/manager

Method: GET

Description: Accessible to users with either admin or manager roles.

Headers:

Authorization: Bearer <your_jwt_token>

Response (Success):
```
{
"message": "Welcome Manager"
}
```
Response (Error):
```
{
"message": "Access denied"
}
```

3. User Route
URL: /api/users/user

Method: GET

Description: Accessible to users with roles admin, manager, or user.

Headers:

Authorization: Bearer <your_jwt_token>

Response (Success):
```
{
"message": "Welcome User"
}
```
Response (Error):
```
{
"message": "Access denied"
}
```

Common Error Responses

401 Unauthorized:
```
{
"message": "No token, authorization denied"
}
```

403 Forbidden:
```
{
"message": "Access denied"
}
```

404 Not Found:
```
{
"message": "User with username exampleUser not found"
}
```

500 Internal Server Error:
```
{
"message": "Something went wrong"
}
```
## API Reference

####  Register a new user

```http
POST /api/auth/register
```
#### User login (returns JWT)

```http
  POST /api/auth/login
  ```
  #### Admin-only route

```http
  GET /api/users/admin
  ```
  #### Accessible by Admin & Manager

```http
 GET /api/users/manager
  ```
  #### Accessible by Admin, Manager & User

```http
 GET /api/users/user
  ```



