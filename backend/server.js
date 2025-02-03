const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

dotenv.config();

const app = express();
app.use(cors({ credentials: true, origin: '${process.env.REACT_APP_API_URL}' }));
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB error:', err));
<<<<<<< HEAD
app.use(cors({
  origin: [https://mini-expense-tracker-alpha.vercel.app/],
  method: ['GET', 'POST'],
  credentials: true
}
));
=======

>>>>>>> d1c1086 (some changes)

app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
