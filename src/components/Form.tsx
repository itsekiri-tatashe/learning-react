import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; //integrating Zod with HookForm

const schema = z.object({
  name: z.string().min(7, { message: "Name must be at least 7 characters" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "You must be at least 18" }),
});

// Convert zod object to interface
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) }); // Integrating Zod with HookForm

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          className="form-control"
          id="name"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="age"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
