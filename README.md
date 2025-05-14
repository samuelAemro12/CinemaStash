# 🎬 CinemaStash

**CinemaStash** is a modular, full-stack MERN (MongoDB, Express, React, Node.js) API that helps users manage their personal movie wishlist, add reviews, and get personalized recommendations. It integrates with the TMDB API to fetch accurate movie data and trailers.

---

## 🚀 Features

- 🔐 **User Authentication** (Register, Login, JWT-based auth)
- 📝 **Wishlist Management** (Add, update, remove, clear)
- 🌟 **Review System** (Comment, rate, and update reviews)
- 🎥 **TMDB Integration** for:
  - Fetching movie details by title
  - Popular movies
  - Movie trailers
- 📊 **Pagination, Search, Filters & Sorting**
- 🧠 **Recommendations** based on user activity
- 🛡️ **Rate Limiting** on public and write routes
- ✅ **Robust Validation & Error Handling**

---

## 🏗️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Backend    | Node.js, Express.js, MongoDB (Mongoose) |
| Frontend   | *(Not included in this repo)*       |
| API Data   | [TMDB API](https://www.themoviedb.org/documentation/api) |
| Auth       | JWT, bcrypt                         |
| Validation | express-validator                   |
| Rate Limiting | express-rate-limit               |

---

## 📁 Folder Structure (Backend)
CinemaStash/
├── controllers/
│   ├── auth.controller.js
│   ├── movie.controller.js
│   ├── recommendation.controller.js  
│   ├── review.controller.js
│   ├── user.controller.js
│   └── wishlist.controller.js
├── middleware/
│   ├── authMiddleware.js
│   ├── rateLimitter.js             
│   └── validateRequest.js           
├── models/
│   ├── movie.model.js
│   ├── review.model.js
│   ├── user.model.js
│   └── wishlist.model.js
├── routes/
│   ├── auth.route.js
│   ├── movie.route.js
│   ├── review.route.js
│   ├── user.route.js
│   └── wishlist.route.js
├── services/
│   └── tmdb.service.js
├── validators/
│   ├── movie.validator.js           
│   └── wishlist.validator.js       
├── .gitignore
├── index.js
├── LICENSE                         
├── package-lock.json
└── package.json


---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/samuelAemro12/cinemastash.git
cd cinemastash
2. Install dependencies
bash
Copy
Edit
npm install
3. Setup .env
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/cinemastash
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
4. Run the server
bash
Copy
Edit
npm run start
🧪 API Endpoints (Highlights)
🔒 Auth
POST /api/auth/register

POST /api/auth/login

🎞️ Movies
GET /api/movies/ — All movies

POST /api/movies/ — Create movie (fetches from TMDB)

GET /api/movies/popular — TMDB popular movies

GET /api/movies/search?title=Inception

GET /api/movies/:id/trailer

📝 Wishlist
POST /api/wishlist/

GET /api/wishlist/:userId

PUT /api/wishlist/:wishlistId

DELETE /api/wishlist/:userId/:movieId

DELETE /api/wishlist/clear/:userId

🧠 Recommendations
GET /api/wishlist/:userId/recommendations

🔐 Security & Validation
✅ Input validation using express-validator

🛡️ Rate limiting for sensitive endpoints

🔒 Auth middleware to protect user routes

🔎 Sensitive data hidden from responses (e.g., password, email)

📃 License
This project is licensed under the MIT License.

✨ Author
Samuel Aemro Melese 
📧 [samuelaemrowork12@gmail.com or https://github.com/samuelAemro12/]
🎓 Final Year Computer Information Systems Student
💼 Career-Focused Software Engineer

📌 Notes
The frontend is currently not included.

Test suite and CI/CD are planned for future updates.

Contributions and issues welcome!

yaml
Copy
Edit

---