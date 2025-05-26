const express = require('express');
const router = express.Router();
const db = require('../config/db');

// POST /api/contact
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('[DB ERROR] Failed to insert contact form data:', err);
      return res.status(500).json({ error: 'Database error. Please try again later.' });
    }

    console.log('[DB SUCCESS] New contact added with ID:', result.insertId);
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

module.exports = router;
