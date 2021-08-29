require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 8000;
const app = express();

connectDB();

app.use(express.json());

app.listen(PORT, console.log(`SERVER running on ${PORT}`));
