#!/bin/bash

# Deployment script for Auction House application

echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing server dependencies..."
npm install

echo "📦 Installing client dependencies..."
cd client && npm install && cd ..

echo "🔨 Building client application..."
cd client && npm run build && cd ..

echo "✅ Build completed successfully!"

echo "🚀 Starting the application..."
echo "📱 Client will be available at: http://localhost:3000"
echo "🔧 Server will be available at: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop the application"

# Start the application
npm run dev




