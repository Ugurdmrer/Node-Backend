require('dotenv').config();
const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;
const collection = process.env.DB_COLLECTION;
const url = `mongodb://${host}:${port}/${db_name}`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;


exports.db = db;