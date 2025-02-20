import { categories } from "./ExpenseInterfaces";

interface Props {
  selectCategory: (category: string) => void;
}

const ExpenseFilter = ({ selectCategory }: Props) => {
  return (
    <select
      className="form-select filter"
      id="category"
      defaultValue={""}
      onChange={(e) => selectCategory(e.target.value)}
    >
      <option value={""}>All Categories</option>
      {categories.map((category, key) => (
        <option key={key} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
