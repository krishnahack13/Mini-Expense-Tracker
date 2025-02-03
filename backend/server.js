const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

dotenv.config();

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB error:', err));
app.use(cors({
  origin: [],
  method: ['GET', 'POST'],
  credentials: true
}
));

app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));