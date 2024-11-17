const express = require('express');
const connectDB = require('./db');
const candidateRoutes = require('./routes/candidateRoutes');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();


// Use authentication routes
app.use('/api/auth', authRoutes);

// Routes
app.use('/api/candidates', candidateRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));