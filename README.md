🎬 CinemaStash
CinemaStash is a backend API for a movie management system built with the MERN stack (MongoDB, Express, Node.js). It allows users to register, manage a movie wishlist, add reviews, and fetch movie data from the TMDB API. The frontend is planned but not included in this repository.
🚀 Features

🔐 User Authentication: Register, login with JWT and bcrypt.
📝 Wishlist Management: Add, view, remove movies.
🌟 Review System: Create, update, delete movie reviews (1–5 rating scale).
🎥 TMDB Integration: Fetch movie details and posters by title.
✅ Input Validation: Using express-validator for robust data handling.
🛡️ Security: Rate limiting, protected routes, sensitive data filtering.
📊 Planned: Pagination, search, filters, sorting, recommendations.

🏗️ Tech Stack



Layer
Technology



Backend
Node.js, Express.js, MongoDB (Mongoose)


API Data
TMDB API


Auth
JWT, bcrypt


Validation
express-validator


Rate Limiting
express-rate-limit (planned)


📁 Folder Structure
CinemaStash/
├── controllers/
│   ├── auth.controller.js
│   ├── movie.controller.js
│   ├── review.controller.js
│   ├── user.controller.js
│   └── wishlist.controller.js
├── middleware/
│   ├── authMiddleware.js
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
├── .gitignore
├── index.js
├── LICENSE
├── package-lock.json
└── package.json

⚙️ Setup & Installation
Prerequisites

Node.js (v16+)
MongoDB (v5+)
TMDB API key (sign up)
Git

Steps

Clone the repository:
git clone https://github.com/samuelAemro12/CinemaStash.git
cd CinemaStash


Install dependencies:
npm install


Set up .env: Create a .env file in the root directory:
PORT=5000
MONGO_URI=mongodb://localhost:27017/cinemastash
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key


Run the server:
npm run start

The API will be available at http://localhost:3000.


🧪 API Endpoints
🔒 Auth



Method
Endpoint
Description
Auth Required



POST
/api/auth/register
Register a user
No


POST
/api/auth/login
Login and get JWT
No


🎞️ Movies



Method
Endpoint
Description
Auth Required



GET
/api/movies
Get all movies
No


GET
/api/movies/:id
Get a movie by ID
No


POST
/api/movies
Add movie from TMDB
No


PUT
/api/movies/:id
Update movie
Yes


DELETE
/api/movies/:id
Delete movie
Yes


📝 Wishlist



Method
Endpoint
Description
Auth Required



POST
/api/wishlist
Add movie to wishlist
Yes


GET
/api/wishlist/:userId
Get user’s wishlist
Yes


DELETE
/api/wishlist/:userId/:movieId
Remove from wishlist
Yes


🌟 Reviews



Method
Endpoint
Description
Auth Required



GET
/api/reviews/:movieId
Get movie reviews
No


POST
/api/reviews
Create review
Yes


PUT
/api/reviews/:id
Update review
Yes (owner)


DELETE
/api/reviews/:id
Delete review
Yes (owner)


🔐 Security & Validation

Input Validation: express-validator for all user inputs.
Auth Middleware: JWT protects sensitive routes.
Data Filtering: Excludes sensitive fields (e.g., password, email).
Rate Limiting: Planned for public and write routes (via express-rate-limit).

📃 License
This project is licensed under the MIT License.
✨ Author
Samuel Aemro Melese

📧 samuelaemrowork12@gmail.com
🐙 https:github.com/samuelAemro12/
🎓 Final Year Computer Information Systems Student
💼 Aspiring Web Developer

📌 Notes

Frontend is not included; this is a backend-only API.
Planned features:  CI/CD.
Contributions welcome! See Contributing.

🤝 Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.

🐛 Issues
Report bugs or suggest features via GitHub Issues.
