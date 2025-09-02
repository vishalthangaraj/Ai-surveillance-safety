# Troubleshooting Guide - Auction House

## Common Issues and Solutions

### 1. HTML and CSS Not Loading

**Symptoms:**
- Page appears blank or unstyled
- Console shows errors about missing files
- Styles not applying correctly

**Solutions:**

#### Check if all dependencies are installed:
```bash
# In the root directory
npm install

# In the client directory
cd client
npm install
```

#### Clear cache and restart:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# In client directory
cd client
rm -rf node_modules package-lock.json
npm install
```

#### Check if the development server is running:
```bash
# Start both server and client
npm run dev

# Or start them separately
npm run server  # Terminal 1
npm run client  # Terminal 2
```

### 2. Tailwind CSS Not Working

**Symptoms:**
- Tailwind classes not applying
- Styles look broken

**Solutions:**

#### Verify Tailwind configuration:
- Check that `tailwind.config.js` exists in the client directory
- Ensure `postcss.config.js` is properly configured
- Verify that `@tailwind` directives are in `index.css`

#### Rebuild the CSS:
```bash
cd client
npm run build
```

### 3. Socket.io Connection Issues

**Symptoms:**
- Real-time features not working
- Connection status shows "Disconnected"

**Solutions:**

#### Check server is running:
```bash
# Make sure server is running on port 5000
npm run server
```

#### Check CORS settings:
- Verify `SOCKET_CORS_ORIGIN` in environment variables
- Default should be `http://localhost:3000`

#### Test connection:
```bash
# Run the test file
node test.js
```

### 4. Build Issues

**Symptoms:**
- Build fails with errors
- Production build doesn't work

**Solutions:**

#### Check for missing dependencies:
```bash
# Install all dependencies
npm install
cd client && npm install && cd ..
```

#### Clear build cache:
```bash
cd client
rm -rf build
npm run build
```

### 5. Port Conflicts

**Symptoms:**
- "Port already in use" errors
- Can't start the application

**Solutions:**

#### Find and kill processes using the ports:
```bash
# For Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

netstat -ano | findstr :3000
taskkill /PID <PID> /F

# For Mac/Linux
lsof -ti:5000 | xargs kill -9
lsof -ti:3000 | xargs kill -9
```

#### Use different ports:
```bash
# Set custom ports
PORT=5001 npm run server
cd client && PORT=3001 npm start
```

### 6. Missing Image Files

**Symptoms:**
- Console errors about missing favicon or logo files
- Broken image links

**Solutions:**

#### Generate proper image files:
1. Create a favicon.ico file (16x16, 32x32, 48x48)
2. Create logo192.png (192x192 pixels)
3. Create logo512.png (512x512 pixels)

#### Use online generators:
- [Favicon.io](https://favicon.io/) for favicon
- [RealFaviconGenerator](https://realfavicongenerator.net/) for comprehensive favicon set

### 7. Environment Variables

**Symptoms:**
- Configuration not loading
- Default values being used

**Solutions:**

#### Create .env file:
```bash
# Create .env file in root directory
touch .env

# Add required variables
PORT=5000
NODE_ENV=development
SOCKET_CORS_ORIGIN=http://localhost:3000
```

### 8. Browser Compatibility

**Symptoms:**
- App works in some browsers but not others
- Features not functioning properly

**Solutions:**

#### Check browser support:
- Use modern browsers (Chrome, Firefox, Safari, Edge)
- Enable JavaScript
- Clear browser cache and cookies

#### Check console for errors:
- Open Developer Tools (F12)
- Look for JavaScript errors in Console tab
- Check Network tab for failed requests

## Getting Help

If you're still experiencing issues:

1. Check the console for error messages
2. Verify all files are in the correct locations
3. Ensure all dependencies are installed
4. Try running the application in a different browser
5. Check if your Node.js version is compatible (recommend v16+)

## File Structure Check

Ensure your project structure looks like this:
```
AIsurvelaince/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── favicon.ico
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── reset.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── components/
│   │   └── context/
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── server.js
├── package.json
├── config.js
└── .gitignore
```




