# CSC3916 Homework 2 - Movie API

This is a RESTful API for managing movies with authentication support.

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   UNIQUE_KEY=your_unique_key_here
   SECRET_KEY=your_secret_key_here
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- POST `/signup` - Register a new user
  - Body: `{ "username": "string", "password": "string" }`

- POST `/signin` - Login and get JWT token
  - Body: `{ "username": "string", "password": "string" }`
  - Returns: JWT token for authentication

### Movies
- GET `/movies` - Get movies
  - No authentication required
  - Returns: `{ "status": 200, "message": "GET movies", "headers": {...}, "query": {...}, "env": "your_unique_key" }`

- POST `/movies` - Save a movie
  - No authentication required
  - Returns: `{ "status": 200, "message": "movie saved", "headers": {...}, "query": {...}, "env": "your_unique_key" }`

- PUT `/movies` - Update a movie
  - Requires JWT authentication
  - Header: `Authorization: JWT <token>`
  - Returns: `{ "status": 200, "message": "movie updated", "headers": {...}, "query": {...}, "env": "your_unique_key" }`

- DELETE `/movies` - Delete a movie
  - Requires Basic authentication
  - Header: `Authorization: Basic <base64(username:password)>`
  - Returns: `{ "status": 200, "message": "movie deleted", "headers": {...}, "query": {...}, "env": "your_unique_key" }`

## Testing with Postman

1. Import the Postman collection from the link below
2. Set up environment variables in Postman:
   - `base_url`: Your API base URL (e.g., `http://localhost:8080` for local development or your Heroku/Render URL)
   - `token`: Will be automatically set after successful signin

[Postman Collection Link](YOUR_POSTMAN_COLLECTION_LINK_HERE)

## Authentication Examples

### Basic Auth
```
Authorization: Basic base64(username:password)
```

### JWT Auth
```
Authorization: JWT <token_from_signin>
```

## Error Responses
- 401: Unauthorized - Invalid credentials
- 405: Method Not Allowed - Unsupported HTTP method
