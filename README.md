🎬 CinemaStash
CinemaStash is a backend API for a movie management system built with MongoDB, Express, and Node.js. It supports user authentication, movie wishlist management, reviews, and TMDB API integration for movie data. The frontend is planned but not included.
🚀 Features

🔐 User Authentication: JWT-based register/login with bcrypt hashing.
📝 Wishlist Management: Add, view, remove movies from user wishlist.
🌟 Review System: Create, update, delete movie reviews (1–5 rating scale).
🎥 TMDB Integration: Fetch movie details and posters by title.
✅ Input Validation: express-validator for user, review, and movie routes.
🛡️ Security: Protected routes, sensitive data filtering (e.g., password, email).

🏗️ Tech Stack
Layer - Technology

Backend - Node.js, Express.js, MongoDB (Mongoose)

API Data - TMDB API

Authentication - JWT, bcrypt

Validation - express-validator

Rate Limiting - express-rate-limit

📁 Folder Structure
CinemaStash/
├── controllers/
│   ├── auth.controller.js
│   ├── movie.controller.js
│   ├── review.controller.js
│   ├── user.controller.js
│   ├── wishlist.controller.js
│   └── recommendation.controller.js
├── middleware/
│   ├── authMiddleware.js
│   └── rateLimiter.js
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
│   ├── wishlist.route.js
│   └── recommendation.route.js (optional if you're adding this)
├── services/
│   └── tmdb.service.js
├── validators/
│   ├── auth.validator.js
│   ├── movie.validator.js
│   ├── review.validator.js
│   └── wishlist.validator.js
├── .gitignore
├── index.js
├── LICENSE
├── package.json
└── README.md


---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js (v16+)
- MongoDB (v5+)
- TMDB API key ([sign up](https://www.themoviedb.org/ ))
- Git

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/samuelAemro12/CinemaStash.git   
   cd CinemaStash
   ```
   Install dependencies:
``` bash
npm install
```
Set up .env: Create a .env file in the root directory:
env
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/cinemastash
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
```
Run the server:
```bash
npm run start
```

🔐 Security & Validation

Input Validation: express-validator for user, review, and movie inputs.
Auth Middleware: JWT protects wishlist, review, and user routes.
Data Filtering: Excludes sensitive fields (e.g., password, email in user.controller.js).
Planned: Rate limiting (express-rate-limit), modular validators.

🔧 Troubleshooting

MongoDB Connection: Ensure MongoDB is running or use Atlas URI.
TMDB Errors: Verify TMDB_API_KEY is valid.
JWT Issues: Check JWT_SECRET and token in Authorization: Bearer <token>.

📃 License
MIT License.
✨ ## Author
Samuel Aemro Melese

📧 samuelaemrowork12@gmail.com
🐙https://github.com/samuelAemro12/
🎓 Final Year Computer Information Systems Student
💼 Aspiring Web Developer

📌 Notes

Backend-only API; frontend planned.
Contributions welcome! See Contributing.

🤝 Contributing

Fork the repository.
Create a feature branch: git checkout -b feature/YourFeature
Commit changes: git commit -m 'Add YourFeature'
Push to branch: git push origin feature/YourFeature
Open a Pull Request.

🐛 Issues
Report bugs or suggest features via GitHub Issues.

