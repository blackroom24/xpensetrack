const mongoose = require('mongoose');

const db = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    const con = await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connection ${con.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
