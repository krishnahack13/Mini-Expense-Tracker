const Expense = require('../models/Expense');

const addExpense = async (req, res) => {
  const { amount, category, date, description } = req.body;
  try {
    const expense = new Expense({ amount, category, date, description, user: req.userId });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.userId }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
    res.json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.findByIdAndDelete(id);
    res.json({ message: 'Expense deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addExpense, getExpenses, updateExpense, deleteExpense };