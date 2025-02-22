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

  // State for edit, if set to null add a new expense else edit an existing expense
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);


  // Add or Edit Expense
  const saveExpense = (expense: any) => {
    if (editingExpense) {
      // Update existing expense
      setExpenseData((prev) =>
        prev.map((item) => (item.id === editingExpense.id ? { ...expense, id: editingExpense.id } : item))
      );
      setEditingExpense(null); // Reset after editing
    } else {
      // Add new expense
      setExpenseData([...expenseData, { ...expense, id: Date.now() }]);
    }
  };

  // Edit Expense
  const editExpense = (expense: Expense) => {
    setEditingExpense(expense);
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
      <ExpenseForm saveExpense={saveExpense} editingExpense={editingExpense} />
      <ExpenseFilter
        selectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseTable
        expenseData={visbleExpense}
        onDelete={deleteExpense}
        onEdit={editExpense}
      />
    </>
  );
}

export default App;
