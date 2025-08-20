# Feathers Users Backend

A simple **User Management Backend** built with **FeathersJS**, **PostgreSQL**, and **Knex**.  
This service provides APIs for managing users (CRUD) with migrations handled by Knex.

---

## 🚀 Features
- FeathersJS REST API
- PostgreSQL database with Knex migrations
- User management (add, update, delete, list)
- Soft delete support (`deleted: false` filter)

---

## 📦 Setup

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd feathers-users-backend
npm install
DATABASE_URL=postgres://<user>:<password>@localhost:5432/feathers_users
PORT=3030
npx knex migrate:latest --knexfile knexfile.js
npm run dev
http://localhost:3030
