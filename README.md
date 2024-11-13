# LinkedIn Search Tool

A professional Node.js application that demonstrates LinkedIn profile search capabilities using official APIs and best practices.

## Features

- Express.js REST API backend
- Modern web interface with Tailwind CSS
- Profile search with multiple filters
- Secure API key management
- Real-time search results

## Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: HTML + Tailwind CSS
- **Environment**: dotenv for configuration
- **Development**: nodemon for hot reloading

## Project Structure

```
├── src/
│   └── index.js          # Main server file
├── public/
│   └── search.html       # Frontend interface
├── .env                  # Environment variables
├── package.json          # Project dependencies
└── README.md            # Documentation
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Add your LinkedIn API credentials

## Environment Variables

```env
LINKEDIN_CLIENT_ID=your_client_id_here
LINKEDIN_CLIENT_SECRET=your_client_secret_here
LINKEDIN_REDIRECT_URI=http://localhost:3000/callback
```

## Available Scripts

- `npm start`: Run the production server
- `npm run dev`: Run the development server with hot reload

## API Endpoints

### GET /api/search
Search for LinkedIn profiles with filters:
- Keywords
- Industry
- Job Title
- Company
- Location
- School

## Frontend

The frontend is built with:
- Responsive design using Tailwind CSS
- Real-time search results
- Clean and professional UI
- Mobile-friendly interface

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open http://localhost:3000 in your browser
3. The server will automatically reload when you make changes

## Production

For production deployment:
1. Set appropriate environment variables
2. Run `npm start`
3. Use a process manager like PM2 (recommended)

## Dependencies

- `express`: ^4.18.2 - Web framework
- `dotenv`: ^16.3.1 - Environment configuration
- `nodemon`: ^3.0.2 - Development server

## Notes

- Ensure you have Node.js 14+ installed
- Keep your API credentials secure
- Follow LinkedIn's API usage guidelines
- Monitor rate limits and API quotas

## License

MIT License - See LICENSE file for details