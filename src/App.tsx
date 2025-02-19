import { useState } from "react";
import ExpenseTable from "./components/expense-project/ExpenseTable";

// Define a TypeScript type for expense entries
function App() {
  const [categories] = useState(["Groceries", "Utilities", "Entertainment"]);

  // Dummy Data
  const [expenseData, setExpenseData] = useState([
    { id: 1, description: "Milk", amount: 15, category: "Groceries" },
    { id: 2, description: "Electricity", amount: 5.29, category: "Utilities" },
    { id: 3, description: "Spotify", amount: 7, category: "Entertainment" },
    { id: 4, description: "Netflix", amount: 12, category: "Entertainment" },
  ]);

  // Delete Object from List
  const deleteExpense = (index: number) => {
    setExpenseData(expenseData.filter((expense) => expense.id !== index));
  };

  return (
    <>
      <ExpenseTable expenseData={expenseData} onClick={deleteExpense} />
    </>
  );
}

export default App;
