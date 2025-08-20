## steps to run the backend

1. Clone the repo
2. Insall dependencies
     npm install
3. Create a .env file
     DATABASE_URL = postgres://<user>:<password>@localhost:5432/feathers_users
     PORT = 3030
4. Run database migrations
     npx knex migrate:latest --knexfile knexfile.js
5. Start the backend server
6. Server will be running at http://localhost:3030
