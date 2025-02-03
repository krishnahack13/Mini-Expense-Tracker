const express = require('express');
const { addExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController');
const authMiddleware = require('../middleware/authMiddleware'); // Import the function directly

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware); // Now it's a function reference

// Define routes
router.post('/', addExpense);
router.get('/', getExpenses);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;