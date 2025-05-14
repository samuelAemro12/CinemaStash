# 🎬 CinemaStash

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [How to Run Locally](#how-to-run-locally)
5. [Security & Validation](#Security-&-Validation)
7. [License](#license)
8. [Author](#author)
9. [Notes](#notes)
10. [Contributing](#contributing)
11. [Issues](#issues)

## Introduction 
CinemaStash is a backend API for a movie management system built with MongoDB, Express, and Node.js. It supports user authentication, movie wishlist management, reviews, and TMDB API integration for movie data. The frontend is planned but not included.

## 🚀 Features

- 🔐 **User Authentication**: JWT-based register/login with bcrypt hashing.
- 📝 **Wishlist Management**: Add, view, remove movies from user wishlist.
- 🌟 **Review System**: Create, update, delete movie reviews (1–5 rating scale).
- 🎥 **TMDB Integration**: Fetch movie details and posters by title.
- ✅ **Input Validation**: express-validator for user, review, and movie routes.
- 🛡️ **Security**: Protected routes, sensitive data filtering (e.g., password, email).

## 🏗️ Tech Stack
- **Layer** 
- **Backend**- Node.js, Express.js, MongoDB (Mongoose)
- **API Data** - TMDB API
- **Authentication** - JWT, bcrypt
- **Validation** - express-validator
- **Rate Limiting** - express-rate-limit

## ⚙️ How To Run Locally

### Steps

- **Clone the repository**:
   ```bash
   git clone https://github.com/samuelAemro12/CinemaStash.git   
   cd CinemaStash
   ```
   Install dependencies:
``` bash
npm install
```
- **Set up .env: Create a .env file in the root directory**:
env
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/cinemastash
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
```
- **Run the server**:
```bash
npm run start
```

## 🔐 Security & Validation

Input Validation: express-validator for user, review, and movie inputs.
Auth Middleware: JWT protects wishlist, review, and user routes.
Data Filtering: Excludes sensitive fields (e.g., password, email in user.controller.js).
Planned: Rate limiting (express-rate-limit), modular validators.

## 📃 License
-  **MIT License**.

## Author
### [Samuel Aemro Melese](#samuelaemrowork12@gmail.com)
### [Github](#https://github.com/samuelAemro12/)

### 🎓 Final Year Computer Information Systems Student
### 💼 Aspiring Web Developer

## 📌 Notes

- **Backend-only API**; frontend planned.
- **Contributions welcome! See Contributing.**

## 🤝 Contributing
- **Fork the repository**.
-**Create a feature branch**:
  ```git checkout -b feature/YourFeature ```
-**Commit changes**:
  ``` git commit -m 'Add YourFeature```
-**Push to branch**:
  ```git push origin feature/YourFeature```
-**Open a Pull Request**.

## 🐛 Issues
Report bugs or suggest features via GitHub Issues.

