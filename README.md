# TradeEstates - Real Estate Platform

TradeEstates is a modern real estate platform that allows users to browse, list, and manage real estate properties. The application features user authentication, property listings, chat functionality, and profile management.

## Features

- **User Authentication**: Secure login and registration system
- **Property Listings**: Browse and search for properties with advanced filtering
- **User Profiles**: Manage personal information and view saved properties
- **Real-time Chat**: Communicate with other users about properties
- **Property Management**: Create, update, and delete property listings
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- React.js
- Vite
- SCSS for styling
- Axios for API requests
- React Router for navigation
- Socket.io for real-time chat

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL database
- JWT for authentication
- Socket.io for real-time communication

## Project Structure

```
real-estate-app/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context providers
│   │   ├── lib/            # Utility functions and API setup
│   │   ├── routes/         # Page components and routing
│   │   └── ...
│   ├── public/             # Static assets
│   └── ...
├── api/                    # Backend Node.js application
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Custom middleware
│   ├── routes/             # API routes
│   ├── lib/                # Utility functions
│   ├── prisma/             # Database schema and migrations
│   └── ...
└── socket/                 # Socket.io server for real-time chat
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/Akasshhhh/TradeEstates.git
cd real-estate-app
```

2. Install dependencies for both frontend and backend
```bash
# Install backend dependencies
cd api
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables

For the backend (`api/.env`):
```
DATABASE_URL="postgresql://username:password@localhost:5432/real_estate_db"
JWT_SECRET_KEY="your_jwt_secret"
CLIENT_URL="http://localhost:5173"
```

For the frontend (`client/.env`):
```
VITE_API_URL="http://localhost:3000/api"
```

4. Set up the database
```bash
cd api
npx prisma migrate dev
```

5. Start the development servers

Backend:
```bash
cd api
npm run dev
```

Frontend:
```bash
cd client
npm run dev
```

Socket server:
```bash
cd socket
npm run dev
```

## Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set the environment variables:
   - `VITE_API_URL`: Your backend API URL (e.g., `https://your-backend.onrender.com/api`)
3. Deploy the application

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set the environment variables:
   - `DATABASE_URL`: Your PostgreSQL database URL
   - `JWT_SECRET_KEY`: Your JWT secret key
   - `CLIENT_URL`: Your frontend URL (e.g., `https://your-frontend.vercel.app`)
   - `NODE_ENV`: Set to `production`
3. Deploy the application

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/profilePosts` - Get user's posts and saved posts
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/notification` - Get notification count

### Posts
- `GET /api/posts` - Get all posts with filtering
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id` - Get a specific post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Chats
- `GET /api/chats` - Get user's chats
- `GET /api/chats/:id` - Get a specific chat
- `POST /api/chats` - Create a new chat
- `PUT /api/chats/read/:id` - Mark chat as read

### Messages
- `POST /api/messages/:chatId` - Send a message

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Socket.io](https://socket.io/)
- [Vercel](https://vercel.com/)
- [Render](https://render.com/) 