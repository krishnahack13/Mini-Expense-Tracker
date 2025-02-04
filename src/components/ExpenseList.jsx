import { useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ExpenseList = ({ expenses, onDelete }) => {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (expense) => {
    setEditId(expense._id);
    setEditData({
      amount: expense.amount,
      category: expense.category,
      date: expense.date.split('T')[0],
      description: expense.description,
    });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/expenses/${id}`,
        editData,
        { withCredentials: true }
      );
      setEditId(null);
      onDelete(); // Refresh the expense list
    } catch (err) {
      alert('Failed to update expense');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://mini-expense-tracker-backend-ddpt.onrender.com/api/expenses/${id}`,
        { withCredentials: true }
      );
      onDelete(); // Refresh the expense list
    } catch (err) {
      alert('Failed to delete expense');
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense._id}>
              <TableCell>
                {editId === expense._id ? (
                  <input
                    type="number"
                    value={editData.amount}
                    onChange={(e) => setEditData({ ...editData, amount: e.target.value })}
                  />
                ) : (
                  `$${expense.amount}`
                )}
              </TableCell>
              <TableCell>
                {editId === expense._id ? (
                  <select
                    value={editData.category}
                    onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                  >
                    {['Food', 'Travel', 'Entertainment', 'Utilities', 'Other'].map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                ) : (
                  expense.category
                )}
              </TableCell>
              <TableCell>
                {editId === expense._id ? (
                  <input
                    type="date"
                    value={editData.date}
                    onChange={(e) => setEditData({ ...editData, date: e.target.value })}
                  />
                ) : (
                  new Date(expense.date).toLocaleDateString()
                )}
              </TableCell>
              <TableCell>
                {editId === expense._id ? (
                  <input
                    value={editData.description}
                    onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                  />
                ) : (
                  expense.description
                )}
              </TableCell>
              <TableCell>
                {editId === expense._id ? (
                  <>
                    <Button onClick={() => handleUpdate(expense._id)}>Save</Button>
                    <Button onClick={() => setEditId(null)}>Cancel</Button>
                  </>
                ) : (
                  <>
                    <IconButton onClick={() => handleEdit(expense)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(expense._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseList;
