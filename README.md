# Mini Expense Tracker with Intelligent Insights  
A web application for tracking expenses and visualizing spending patterns. Built with React, Node.js, Express, and MongoDB.

## Features  
- **Authentication**: Secure JWT-based login/registration with refresh tokens.  
- **Expense Management**: Add, edit, delete, and filter expenses by date or category.  
- **Spending Insights**: Interactive charts (pie/bar) for category-wise expense distribution.  
- **Theme Toggle**: Switch between light/dark modes.  
- **Responsive Design**: Works seamlessly on mobile and desktop.  

---

## Technical Overview  
### 1. JWT Authentication  
- Uses HTTP-only cookies for secure token storage.  
- Refresh tokens prevent session expiration.  
- Protected API routes using middleware.  

### 2. Expense Management  
- **CRUD Operations**: Full support for managing expenses.  
- **Validation**: Required fields (`amount`, `date`, `category`) are enforced.  
- **Filtering**: Paginate and filter expenses by date range or category.  

### 3. Spending Insights  
- Backend calculates total spending and percentage per category.  
- Frontend visualizes data using Recharts. 