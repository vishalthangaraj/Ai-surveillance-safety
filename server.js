const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Auction state
let auctionState = {
  isActive: true,
  endTime: moment().add(2, 'hours').toDate(),
  currentHighestBid: 1000,
  highestBidder: null,
  totalBids: 0,
  itemName: "Rare Vintage Watch Collection",
  itemDescription: "Exclusive collection of vintage timepieces from the 1950s",
  startingBid: 1000,
  minIncrement: 50
};

// Teams data
let teams = [
  {
    id: 1,
    name: "Team Alpha",
    logo: "🏆",
    members: ["John Doe", "Jane Smith"],
    totalBids: 0,
    highestBid: 0,
    badges: ["Fast Bidder"],
    color: "#3B82F6"
  },
  {
    id: 2,
    name: "Team Beta",
    logo: "⚡",
    members: ["Mike Johnson", "Sarah Wilson"],
    totalBids: 0,
    highestBid: 0,
    badges: ["Big Spender"],
    color: "#10B981"
  },
  {
    id: 3,
    name: "Team Gamma",
    logo: "🎯",
    members: ["Alex Brown", "Emma Davis"],
    totalBids: 0,
    highestBid: 0,
    badges: ["Strategic"],
    color: "#F59E0B"
  },
  {
    id: 4,
    name: "Team Delta",
    logo: "🚀",
    members: ["Chris Lee", "Lisa Chen"],
    totalBids: 0,
    highestBid: 0,
    badges: ["Newcomer"],
    color: "#EF4444"
  }
];

// Bidding history
let bidHistory = [];

// Socket connection handling
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Send initial data to new client
  socket.emit('auctionState', auctionState);
  socket.emit('teams', teams);
  socket.emit('bidHistory', bidHistory);

  // Handle new bid
  socket.on('placeBid', (data) => {
    const { teamId, amount, teamName } = data;
    
    if (!auctionState.isActive) {
      socket.emit('error', 'Auction has ended!');
      return;
    }

    if (amount <= auctionState.currentHighestBid) {
      socket.emit('error', `Bid must be higher than ₹${auctionState.currentHighestBid}`);
      return;
    }

    if (amount < auctionState.currentHighestBid + auctionState.minIncrement) {
      socket.emit('error', `Minimum increment is ₹${auctionState.minIncrement}`);
      return;
    }

    // Update auction state
    auctionState.currentHighestBid = amount;
    auctionState.highestBidder = teamName;
    auctionState.totalBids++;

    // Update team data
    const team = teams.find(t => t.id === teamId);
    if (team) {
      team.totalBids++;
      team.highestBid = Math.max(team.highestBid, amount);
      
      // Update badges
      if (team.totalBids >= 5) {
        if (!team.badges.includes("Active Bidder")) {
          team.badges.push("Active Bidder");
        }
      }
      if (amount >= 5000) {
        if (!team.badges.includes("Big Spender")) {
          team.badges.push("Big Spender");
        }
      }
    }

    // Add to bid history
    const bidRecord = {
      id: uuidv4(),
      teamId,
      teamName,
      amount,
      timestamp: new Date(),
      isHighest: true
    };

    // Update previous highest bid
    if (bidHistory.length > 0) {
      bidHistory[bidHistory.length - 1].isHighest = false;
    }

    bidHistory.push(bidRecord);

    // Broadcast to all clients
    io.emit('auctionState', auctionState);
    io.emit('teams', teams);
    io.emit('newBid', bidRecord);
    io.emit('bidHistory', bidHistory);

    // Trigger confetti effect for new highest bid
    io.emit('triggerConfetti', { teamName, amount });
  });

  // Handle team selection
  socket.on('selectTeam', (teamId) => {
    socket.emit('selectedTeam', teams.find(t => t.id === teamId));
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// API Routes
app.get('/api/auction', (req, res) => {
  res.json(auctionState);
});

app.get('/api/teams', (req, res) => {
  res.json(teams);
});

app.get('/api/bid-history', (req, res) => {
  res.json(bidHistory);
});

// Reset auction (for testing)
app.post('/api/reset-auction', (req, res) => {
  auctionState = {
    isActive: true,
    endTime: moment().add(2, 'hours').toDate(),
    currentHighestBid: 1000,
    highestBidder: null,
    totalBids: 0,
    itemName: "Rare Vintage Watch Collection",
    itemDescription: "Exclusive collection of vintage timepieces from the 1950s",
    startingBid: 1000,
    minIncrement: 50
  };
  
  teams.forEach(team => {
    team.totalBids = 0;
    team.highestBid = 0;
    team.badges = team.badges.filter(badge => ["Fast Bidder", "Big Spender", "Strategic", "Newcomer"].includes(badge));
  });
  
  bidHistory = [];
  
  io.emit('auctionState', auctionState);
  io.emit('teams', teams);
  io.emit('bidHistory', bidHistory);
  
  res.json({ message: 'Auction reset successfully' });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

