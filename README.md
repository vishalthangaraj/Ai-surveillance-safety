# 🏛️ Auction House - Real-time Online Bidding Platform

A modern, feature-rich online bidding auction website built with React, Node.js, and Socket.io. Experience real-time bidding with live graphs, team management, and interactive features.

## ✨ Features

### 🎯 Core Features
- **Real-time Bidding**: Live bidding with instant updates across all connected clients
- **Interactive Charts**: Multiple chart types (Line, Bar, Doughnut) showing bidding analytics
- **Team Management**: 4 pre-configured teams with member details and performance tracking
- **Live Leaderboard**: Dynamic rankings based on highest bids, total bids, and spending
- **Dark/Light Mode**: Toggle between themes for better user experience

### 🚀 Unique Features
- **AI Suggested Bids**: Smart recommendations for competitive bidding amounts
- **Confetti Animations**: Celebratory effects when new highest bids are placed
- **Auto-scroll Live Feed**: Real-time activity stream with bid notifications
- **Custom Badges**: Achievement system for teams (Fast Bidder, Big Spender, etc.)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Notifications**: Toast notifications for bid updates and errors

### 📊 Analytics & Visualization
- **Bid Trend Chart**: Shows bidding activity over time
- **Team Performance Chart**: Displays bids per team
- **Bid Share Chart**: Pie chart showing team participation
- **Performance Metrics**: Participation rates, total spending, and statistics

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Chart.js** - Interactive charts and graphs
- **Socket.io Client** - Real-time communication
- **React Router** - Client-side routing
- **React Hot Toast** - Notification system

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Socket.io** - Real-time bidirectional communication
- **UUID** - Unique identifier generation
- **Moment.js** - Date/time utilities

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd auction-house
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Start the development servers**
   ```bash
   # Start both server and client (recommended)
   npm run dev
   
   # Or start them separately:
   npm run server    # Backend on port 5000
   npm run client    # Frontend on port 3000
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
auction-house/
├── server.js                 # Main server file
├── package.json             # Server dependencies
├── client/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # React context providers
│   │   ├── App.js          # Main app component
│   │   └── index.js        # App entry point
│   └── package.json        # Client dependencies
└── README.md
```

## 🎮 How to Use

### 1. Homepage
- View auction overview and countdown timer
- See current highest bid and active teams
- Quick navigation to different sections

### 2. Live Bidding
- Select a team to start bidding
- Place bids with real-time validation
- View interactive charts and analytics
- Monitor live activity feed

### 3. Teams
- Browse all participating teams
- View team details and member information
- See individual team performance statistics
- Click teams to view detailed information

### 4. Leaderboard
- View team rankings and performance
- Sort by different metrics (highest bid, total bids, spending)
- See participation rates and statistics
- Track current leader and competition

## 🔧 Configuration

### Server Configuration
Edit `server.js` to modify:
- Auction duration and settings
- Team configurations
- Minimum bid increments
- Item details

### Client Configuration
- Theme settings in `ThemeContext.js`
- Chart configurations in `BidChart.js`
- Animation settings in component files

## 🎨 Customization

### Adding New Teams
1. Edit the `teams` array in `server.js`
2. Add team details: name, logo, members, color
3. Restart the server

### Modifying Auction Settings
1. Update `auctionState` in `server.js`
2. Change item name, description, starting bid
3. Adjust minimum bid increments

### Styling Changes
- Modify Tailwind classes in components
- Update color schemes in `tailwind.config.js`
- Customize animations in CSS files

## 🌟 Features in Detail

### Real-time Communication
- WebSocket connections for instant updates
- Bid validation and error handling
- Connection status indicators
- Automatic reconnection

### Chart Analytics
- **Line Chart**: Bid amount progression over time
- **Bar Chart**: Number of bids per team
- **Doughnut Chart**: Team participation distribution
- Interactive tooltips and legends

### Team System
- 4 pre-configured teams with unique identities
- Member management and team statistics
- Achievement badges and performance tracking
- Team selection for bidding

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized for tablets and desktops

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5000
   npx kill-port 5000
   # Kill process on port 3000
   npx kill-port 3000
   ```

2. **Socket connection issues**
   - Check if server is running on port 5000
   - Verify CORS settings in server.js
   - Check browser console for errors

3. **Chart not displaying**
   - Ensure Chart.js dependencies are installed
   - Check for JavaScript errors in console
   - Verify data is being passed correctly

### Development Tips
- Use browser developer tools to debug
- Check server console for backend errors
- Monitor Socket.io connection status
- Test on different devices and browsers

## 📈 Performance

- **Real-time Updates**: < 100ms latency
- **Chart Rendering**: Optimized for smooth animations
- **Mobile Performance**: Optimized bundle size
- **Memory Usage**: Efficient state management

## 🔒 Security Considerations

- Input validation on both client and server
- XSS protection through React's built-in sanitization
- CORS configuration for API endpoints
- Rate limiting for bid submissions (can be added)

## 🚀 Deployment

### Production Build
```bash
# Build the React app
cd client
npm run build
cd ..

# Start production server
npm start
```

### Environment Variables
Create a `.env` file for production:
```env
PORT=5000
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Socket.io for real-time capabilities
- Chart.js for beautiful visualizations
- Framer Motion for smooth animations

---

**Happy Bidding! 🎉**

For support or questions, please open an issue in the repository.



