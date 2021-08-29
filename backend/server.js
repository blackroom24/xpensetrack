require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const transactions = require('./routes/transactions');
const PORT = process.env.PORT || 8000;
const app = express();

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is up');
});

app.use('/api/transactions', transactions);
app.listen(PORT, console.log(`SERVER running on ${PORT}`));
