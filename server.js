const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/quanlyduan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Chào mừng đến với Quản Lý Dự An Blockchain!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});