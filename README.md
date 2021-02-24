This project is still being developed — PRs, Contributions and Issues are all welcome!



# Getting started


To get the Node server running locally:
* Clone this repo
* `npm install` to install all required dependencies
* Create MongoDb Cluster and Get Connection MongoDb URI
* Set environment variables in `.env`
  * Set `MONGODB_URI = <YOUR_MONGODB_URI>`
  * Set `JWT_SECRET_KEY = <YOUR_SECRET_KEY>`
  * Set `JWT_EXPIRE = <YOUR_JWT_EXPIRE>`
  * Set `JWT_COOKIE = <YOUR_JWT_COOKIE>`
  * Set `PORT = <YOUR_PORT>`
* `npm run start` to start the local server

# Code Overview 
## Dependencies
* [Expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
* [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to JavaScript
* [dotenv](https://github.com/motdotla/dotenv) - Zero-Dependency module that loads environment variables
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme) - A library to help you hash passwords.
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) - An implementation of JSON Web Tokens.
* [express-async-handler](https://github.com/Abazhenov/express-async-handler) - For handling exceptions inside of async express routes and passing them to your express error handlers.

## Application Structure
* `server.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also inncludes the routes we'll be using in the application.
* `routers/` - This folder contains the route definitions for our API.
* `models/` - This folder contains the schema definitions for our Mongoose models (Todo, User).
* `controllers/` - This folder contains controllers for our API.
* `middlewares/` - This folder contains middlewares for our API.
* `helpers/` - This folder contains helper functions for adapting 3rd party libraries for our API.

## Error Handling
In `middlewares/errors/customErrorHandler.js`, we define a error-handling middleware for handling Mongoose's errors and our own errors.

## Authentication
Requests are authenticated using the `Authorization` header and value `Bearer: {{acces_token}}` with a valid JWT.

We define express middlewares in `middlewares/authorization/auth.js` that can be used to authenticate requests. The `required` middlewares returns `401` or `403`.

## Environment Variables and Constants
Environment Variables and Constants Can Be Set in `./config/env/config.env.`

## API Access Points
Method | Access Point | Explanation
------ | ------------ | ---------- |
GET | `/api/todos` | Returns all the todos in the database as an array. Returns an empty array if there is no text in the system.
GET | `/api/todos/:id` | Returns the single todo matching the given `id` value. Returns an error object when there is no match.
POST | `/api/todos` | Post entry to the database is done here. The `content` field is required. If the entry is successful, it returns the todo object entered.
PUT | `/api/todos/:id/edit` | Editing of the todos in the database is done here. If the changes are successful, it returns the updated todo object.
DELETE | `/api/todos/:id/delete` | The deletion of the matching todo in the database is done here. When the deletion is successful, the success message is returned.
DELETE | `/api/todos` | The deletion of the all todos in the database is done here. When the deletion is successful, the success message is returned.
POST | `/api/auth/register` | Registers the user in the database and returns registered user.
POST | `/api/auth/login` | The user logs into the application and returns the user who has already registered and logged in.
GET | `/api/auth/logout` | Exits the user from the application and returns the user who has already registered and logged out.
