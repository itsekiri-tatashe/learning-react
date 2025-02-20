import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; //integrating Zod with HookForm
import { categories } from "./ExpenseInterfaces";

const schema = z.object({
  description: z
    .string()
    .min(3)
    .max(20, { message: "Description should be less than 20" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.5, { message: "Amount should be at least $.5" }),
  category: z.enum(categories, {
    errorMap: () => ({
      message: "Category is required",
    }),
  }),
});

// Convert zod object to interface
type FormData = z.infer<typeof schema>;

interface Props {
  addExpense: (data: FieldValues) => void;
}

const ExpenseForm = ({ addExpense }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => addExpense(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="text"
          className="form-control"
          id="amount"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          id="category"
          {...register("category")}
          defaultValue={""}
        >
          <option disabled value={""}>
            Choose category..
          </option>
          {categories.map((category, key) => (
            <option key={key} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
