const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const booksRoutes = require('./routes/booksRoutes');
console.log('MONGO_URI:', process.env.MONGO_URI);


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/books', booksRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
