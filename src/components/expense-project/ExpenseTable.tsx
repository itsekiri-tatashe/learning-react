interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenseData: Expense[];
  onClick: (id: number) => void;
}

const ExpenseTable = ({ expenseData, onClick }: Props) => {
  return (
    <>
      {/* Creating Table */}
      <table className="table table-bordered">
        <thead className="text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenseData.map((expense) => (
            <tr key={expense.id} className="text-center">
              <td>{expense.id}</td>
              <td>{expense.description}</td>
              <td>${expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onClick(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="text-center">
            <td colSpan={2}>Total</td>
            <td>
              ${expenseData.reduce((sum, expense) => sum + expense.amount, 0)}
            </td>
            <td colSpan={2}> </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseTable;
