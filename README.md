
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
    
