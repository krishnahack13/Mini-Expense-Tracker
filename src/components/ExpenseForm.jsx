import { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, MenuItem } from '@mui/material';

const ExpenseForm = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const categories = ['Food', 'Travel', 'Entertainment', 'Utilities', 'Other'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const parsedAmount = parseFloat(amount);

    // Ensure required fields are filled
    if (!parsedAmount || parsedAmount <= 0) {
      alert('Please enter a valid amount greater than zero.');
      return;
    }
    if (!category || !date || !description.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post(
        '${process.env.REACT_APP_API_URL}/api/expenses',
        { amount: parsedAmount, category, date, description: description.trim() },
        { withCredentials: true }
      );

      console.log('Expense added successfully:', response.data);

      if (response.status === 201 || response.status === 200) {
        onAdd(); // Callback after successful addition

        // Reset fields
        setAmount('');
        setCategory('Food');
        setDate('');
        setDescription('');
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (err) {
      console.error('Error adding expense:', err.response?.data || err.message);
      alert(err.response?.data?.error || 'Failed to add expense');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        fullWidth
        sx={{ mb: 2 }}
        slotProps={{ htmlInput: { min: 0.01, step: 0.01 } }}
      />
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        slotProps={{ inputLabel: { shrink: true } }}
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;
