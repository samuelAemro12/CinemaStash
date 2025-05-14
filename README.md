🎬 CinemaStash
CinemaStash is a backend API for a movie management system built with MongoDB, Express, and Node.js. It supports user authentication, movie wishlist management, reviews, and TMDB API integration for movie data. The frontend is planned but not included.
🚀 Features

🔐 User Authentication: JWT-based register/login with bcrypt hashing.
📝 Wishlist Management: Add, view, remove movies from user wishlist.
🌟 Review System: Create, update, delete movie reviews (1–5 rating scale).
🎥 TMDB Integration: Fetch movie details and posters by title.
✅ Input Validation: express-validator for user, review, and movie routes.
🛡️ Security: Protected routes, sensitive data filtering (e.g., password, email).
📊 Planned:
Pagination, advanced search, filters, sorting.
Movie recommendations based on user activity.
Rate limiting for public/write routes.



🏗️ Tech Stack



Layer
Technology



Backend
Node.js, Express.js, MongoDB (Mongoose)


API Data
TMDB API


Authentication
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
│   └── authMiddleware.js
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
├── License
├── package-lock.json
└── package.json

Note: Planned additions include recommendation.controller.js, rateLimiter.js, validateRequest.js, and a validators/ folder (auth.validator.js, movie.validator.js, wishlist.validator.js).
⚙️ Setup & Installation
Prerequisites

Node.js (v16+)
MongoDB (v5+, local or MongoDB Atlas)
TMDB API key (sign up)
Git

Steps

Clone the repository:
git clone https://github.com/samuelAemro12/CinemaStash.git
cd CinemaStash


Install dependencies:
npm install


Set up .env: Create a .env file in the root:
PORT=3000
MONGO_URI=mongodb://localhost:27017/cinemastash
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key


For MongoDB Atlas, use your cluster URI.
Generate a secure JWT_SECRET (e.g., openssl rand -base64 32).
Obtain TMDB_API_KEY from TMDB.


Run the server:
npm run start

API available at http://localhost:3000.


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
Add to wishlist
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
✨ Author
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

