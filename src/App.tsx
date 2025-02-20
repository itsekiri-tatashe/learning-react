import { useState } from "react";
import ExpenseTable from "./components/expense-project/ExpenseTable";
import ExpenseForm from "./components/expense-project/ExpenseForm";
import { Expense } from "./components/expense-project/ExpenseInterfaces";
import ExpenseFilter from "./components/expense-project/ExpenseFilter";

// Define a TypeScript type for expense entries
function App() {
  // Dummy Data
  const [expenseData, setExpenseData] = useState<Expense[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Add Expense
  const addExpense = (expense: any) => {
    setExpenseData([...expenseData, { ...expense, id: Date.now() }]);
  };

  // Delete Object from List
  const deleteExpense = (id: number) => {
    setExpenseData(expenseData.filter((expense) => expense.id !== id));
  };

  // Filter Table
  const visbleExpense = selectedCategory
    ? expenseData.filter((expense) => expense.category === selectedCategory)
    : expenseData;

  return (
    <>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseFilter
        selectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseTable expenseData={visbleExpense} onClick={deleteExpense} />
    </>
  );
}

export default App;
