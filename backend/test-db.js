// test-db.js
require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
  try {
    console.log('Testing MongoDB connection...');
    console.log('URI:', process.env.MONGODB_URI);
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected!');
    
    // List databases
    const dbs = await mongoose.connection.db.admin().listDatabases();
    console.log('Available databases:', dbs.databases.map(db => db.name));
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    process.exit(1);
  }
}

testConnection();