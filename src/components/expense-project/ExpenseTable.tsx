import { CiEdit } from "react-icons/ci";
import { Expense } from "./ExpenseInterfaces";
import { MdDeleteForever } from "react-icons/md";

interface Props {
  expenseData: Expense[];
  onDelete: (id: number) => void;
  onEdit: (expense: Expense) => void;
}

const ExpenseTable = ({ expenseData, onDelete, onEdit }: Props) => {
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
          {expenseData.length > 0 ? (
            expenseData.map((expense) => (
              <tr key={expense.id} className="text-center">
                <td>{expense.id}</td>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm mx-5"
                    onClick={() => onEdit(expense)}
                  >
                    <CiEdit size={20} /> Edit
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onDelete(expense.id)}
                  >
                    <MdDeleteForever size={20} /> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center text-muted">
                No results found.
              </td>
            </tr>
          )}
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
