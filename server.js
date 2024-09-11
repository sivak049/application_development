const express = require('express');
const app = express();
const cors = require('cors');

// PostgreSQL database connection setup
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dummy',
  password: 'temp',
  port: 5432,
});

app.use(cors());
app.use('/images', express.static('D:/simple_web_app/my-app'));
// API to search for user
app.get('/api/users/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const result = await pool.query('SELECT profile_picture FROM users WHERE username = $1', [username]);

    if (result.rows.length > 0) {
      res.json({ profile_picture: result.rows[0].profile_picture });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error('Error querying database:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server on port 5000
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
