# ShopNova: MERN Stack Ecommerce Platform

## Overview

ShopNova is a full-featured ecommerce platform built using the MERN stack (MongoDB, Express, React, Node.js) with Redis caching. The application provides a complete online shopping experience with product browsing, cart management, secure checkout, and user authentication.

## Features

- **User Authentication**: Register, login, and profile management
- **Product Management**: Browse, search, filter, and view detailed product information
- **Shopping Cart**: Add/remove items, adjust quantities, persistent cart storage
- **Order Processing**: Secure checkout flow, order history, and status tracking
- **Admin Dashboard**: Manage products, orders, and users (CRUD operations)
- **Performance Optimization**: Redis caching for improved response times
- **Security**: JWT authentication, input validation, and protected routes
- **Responsive Design**: Mobile-friendly interface that works across devices

## Tech Stack

### Backend

- **Node.js & Express**: RESTful API architecture
- **MongoDB**: NoSQL database for flexible data storage
- **Redis**: In-memory data store for caching and performance
- **JWT**: Secure authentication and authorization
- **AWS S3**: Cloud storage for product images (optional)

### Frontend

- **React**: Component-based UI library
- **Redux**: State management
- **React Router**: Navigation and routing
- **Bootstrap/React-Bootstrap**: Responsive styling

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)
- Redis server
- npm or yarn

### Installation

1. **Clone the repository**

```
git clone https://github.com/StacyJ1201/ShopNova.git
cd ShopNova
```

2. **Set up environment variables**

```
# In /backend/.env
PORT=8081
MONGODB_URI=mongodb://localhost:27017/shopnova
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
```

3. **Install backend dependencies**

```
cd backend
npm install
```

4. **Install frontend dependencies**

```
cd ../frontend
npm install
```

5. **Run the development servers**

```
# In /backend
npm run dev

# In /frontend
npm start
```

## API Endpoints

### Products

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get product by ID
- `POST /api/products`: Create a new product (Admin)
- `PUT /api/products/:id`: Update a product (Admin)
- `DELETE /api/products/:id`: Delete a product (Admin)

### Users

- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Authenticate user and get token
- `GET /api/users/profile`: Get user profile (Protected)
- `PUT /api/users/profile`: Update user profile (Protected)

### Orders

- `POST /api/orders`: Create a new order
- `GET /api/orders`: Get all orders (Admin)
- `GET /api/orders/:id`: Get order by ID
- `PUT /api/orders/:id`: Update order status (Admin)
- `DELETE /api/orders/:id`: Delete an order (Admin)

## Deployment

The application can be deployed to AWS using:

- EC2 instances or ECS for hosting the application
- DocumentDB or MongoDB Atlas for database
- ElastiCache for Redis caching
- S3 for static assets and images
- CloudFront for CDN

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Acknowledgements

- MongoDB for database
- Express for API framework
- React for frontend framework
- Node.js for runtime environment
- Redis for caching capabilities

© 2025 ShopNova. All rights reserved.
