import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';

const Chart = ({ expenses }) => {
  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const chartData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value
  }));

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <BarChart width={500} height={300} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Chart;