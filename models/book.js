const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  year: Number,
  quantity: Number,
  imageURL: String,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
