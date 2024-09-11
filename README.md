---

# Simple User Search App

This is a simple web application that allows users to search for a username, retrieve and display the associated profile picture if the user exists, or display a "User not found" message if the user does not exist.

## Features
- Search for a username from the database.
- Displays the user's profile picture if the username exists.
- Displays a "User not found" message if the username is not in the database.

## Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (with npm)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)
  
## Project Structure
```
/my-app
│
├── /client             # Frontend (React + Vite)
│   ├── /src
│   │   ├── App.jsx
│   │   ├── assets
│   ├── index.html
│   └── package.json    # Dependencies for frontend
│
├── /server             # Backend (Express.js)
│   ├── index.js
│   └── package.json    # Dependencies for backend
│
├── /images             # Folder for profile pictures (jpg, png)
│
└── README.md
```

## Setting up the Project

### 1. Clone the Project
First, clone the repository to your local machine:
- `git clone https://github.com/your-username/your-repo.git`
- `cd your-repo`

### 2. Setting up the Database (PostgreSQL)

#### Install PostgreSQL
- Download and install PostgreSQL from [here](https://www.postgresql.org/download/).
- Start the PostgreSQL server.

#### Create the Database
- Log into PostgreSQL and create the `my_app` database and `users` table.

#### Insert Dummy Data
- Insert some dummy users into the database.

#### Upload Profile Pictures
- Place the profile pictures for your test users in the `/images` directory. Ensure the filenames match those specified in the `profile_picture` field in the database.

### 3. Backend Setup (Express.js)

#### Install Backend Dependencies
- Navigate to the `server` directory and install the required dependencies.

#### Start the Backend Server
- Start the backend server.

### 4. Frontend Setup (React + Vite)

#### Install Frontend Dependencies
- Navigate to the `client` directory and install the dependencies.

#### Start the Frontend
- Start the frontend.

### 5. Testing the App
- Visit `http://localhost:3000`.
- Enter a username (e.g., `johndoe`).
- Press the search button to retrieve the user's profile picture if it exists, or see a "User not found" message otherwise.

### 6. Environment Variables
- Create a `.env` file in the `server` directory for PostgreSQL connection settings.

### 7. Project Dependencies

#### Backend (Express.js)
- [Express](https://expressjs.com/)
- [pg](https://node-postgres.com/) (PostgreSQL client for Node.js)
- [dotenv](https://github.com/motdotla/dotenv) (for environment variable management)

#### Frontend (React + Vite)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) (Fast bundler and dev server)

### Additional Notes

- Ensure CORS is properly set up on the backend to avoid issues when making requests from the frontend. 
- You can add more users and their images to the database for extended testing.

---
