@echo off
REM Deployment script for Auction House application (Windows)

echo 🚀 Starting deployment process...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo 📦 Installing server dependencies...
npm install

echo 📦 Installing client dependencies...
cd client
npm install
cd ..

echo 🔨 Building client application...
cd client
npm run build
cd ..

echo ✅ Build completed successfully!

echo 🚀 Starting the application...
echo 📱 Client will be available at: http://localhost:3000
echo 🔧 Server will be available at: http://localhost:5000
echo.
echo Press Ctrl+C to stop the application

REM Start the application
npm run dev

pause




