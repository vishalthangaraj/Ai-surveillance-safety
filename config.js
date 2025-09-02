// Configuration file for the auction application
require('dotenv').config();

const config = {
  // Server configuration
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Socket.io configuration
  socketCorsOrigin: process.env.SOCKET_CORS_ORIGIN || 'http://localhost:3000',
  
  // Auction settings
  auction: {
    defaultStartingBid: 100,
    minBidIncrement: 10,
    auctionDuration: 300000, // 5 minutes in milliseconds
    maxTeams: 10,
    maxBidsPerTeam: 50
  },
  
  // Database configuration (if using a database)
  database: {
    url: process.env.DATABASE_URL || null
  },
  
  // Security settings
  security: {
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
    sessionTimeout: 24 * 60 * 60 * 1000 // 24 hours
  },
  
  // External services
  external: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || null,
    emailServiceApiKey: process.env.EMAIL_SERVICE_API_KEY || null
  }
};

module.exports = config;




