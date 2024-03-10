# 🤖 Assessment 💻

# Server setup
## Requirements
1. Node.js v18.17.0
2. Nest.js v10.3.1
3. PostgreSQL
4. Docker

## Development Setup
`Make sure you are in the root of the server folder.`
1. Create `.env` file. (You can copy `.env.example` file)
2. Run `docker-compose up -d` to setup docker container for database.
3. Run `npm install` to install all the dependencies.
4. Run `npm run migration:generate -- ./src/db/migrations/FirstMigration` to create first migration.
5. Run `npm run start` to start server.
6. Run `npm run seed` to create users.

## Local
1. [Server](http://[::1]:3001/)
2. [Swagger](http://[::1]:3001/api)
3. [Adminer](http://localhost:8881/)

# Client setup
## Requirements
1. Node.js v18.17.0


## Development Setup
`Make sure you are in the root of the client folder.`
1. Create `.env` file. (You can copy `.env.example` file)
2. Run `npm install` to install all the dependencies.
3. Run `npm run start` to start server.


## Local
1. [Server](http://[::1]:3000/)


