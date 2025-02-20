import { useState } from "react";
import ExpenseTable from "./components/expense-project/ExpenseTable";
import ExpenseForm from "./components/expense-project/ExpenseForm";
import { Expense } from "./components/expense-project/ExpenseInterfaces";

// Define a TypeScript type for expense entries
function App() {

  // Dummy Data
  const [expenseData, setExpenseData] = useState<Expense[]>([]);

  // Add Expense
  const addExpense = (expense: any) => {
    setExpenseData([...expenseData, { ...expense, id: Date.now() }]);
  };

  // Delete Object from List
  const deleteExpense = (id: number) => {
    setExpenseData(expenseData.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expenseData={expenseData} onClick={deleteExpense} />
    </>
  );
}

export default App;
