import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(0.01),
  category: z.enum(categories, {
    errorMap: () => ({
      message: "Category is required",
    }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

// 1.) define our props for the ExpenseForm component
interface Props {
  // 2.) define the onSubmit function that will receive the form data
  onSubmit: (data: ExpenseFormData) => void;
}
// 3.) add the props to our ExpenseForm component
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // 7.) grab the reset function to reset the form after submission
    reset,
    //
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    // 4.) use the handleSubmit function to handle form submission
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        // 8.) reset the form after submission
        reset();
      })}
    >
      <div>
        <div className="mb-3">
          <label htmlFor="description" className="label-form">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
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
            id="amount"
            type="number"
            className="form-control"
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
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value=""></option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
