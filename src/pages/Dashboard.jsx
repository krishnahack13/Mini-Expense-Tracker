import { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import Chart from '../components/Chart';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  // Define fetchExpenses outside useEffect
  const fetchExpenses = async () => {
    try {
      const res = await axios.get('${process.env.REACT_APP_BACKEND_URL}/api/expenses', { withCredentials: true });
      setExpenses(res.data);
    } catch (err) {
      alert('Failed to fetch expenses');
    }
  };

  useEffect(() => {
    fetchExpenses(); // Fetch expenses on component mount
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ExpenseForm onAdd={fetchExpenses} /> {/* Pass fetchExpenses correctly */}
      <ExpenseList expenses={expenses} onDelete={fetchExpenses} />
      <Chart expenses={expenses} />
    </div>
  );
};

export default Dashboard;
