## steps to run the backend

1. Clone the repo
2. createdb feathers_users using pgAdmin or terminal
3. Insall dependencies
     npm install
4. Create a .env file
     DATABASE_URL = postgres://<user>:<password>@localhost:5432/feathers_users
     PORT = 3030
5. Run database migrations -> 
     npx knex migrate:latest --knexfile knexfile.js
6. Start the backend server -> npm run dev
7. Server will be running at http://localhost:3030
