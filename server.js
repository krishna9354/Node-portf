const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root route to check server status
app.get('/', (req, res) => {
  res.send('✅ Backend API is running!');
});

// Import and use routes
const contactRoutes = require('./routes/contact');
app.use('/api', contactRoutes);

// Global error handler (optional but good practice)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running at: http://localhost:${port}`);
});
