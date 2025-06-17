// 1.) import z from "zod";
import { z } from "zod";
// 9.) import useForm from "react-hook-form";
import { useForm } from "react-hook-form";
// 10.) import zodResolver from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
// 24.) import categories from "../categories";
import categories from "../categories";

// 7.) store this schema in a variable [schema]
// 2.) call object method on z to create our schema
const schema = z.object({
  // 27.) add custom error messages to description
  //  3.) in this form we have three fields})
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  // 29.) create a custom error message for when the amount is not a number, using invalid_type_error
  amount: z.number({ invalid_type_error: "Amount is required" }).min(0.01),
  // 4.) make sure the category is one of the categories we have, which is a enum, a enum can have multiple values
  // 30. ) add custom error message for category field using errorMap in zod schema
  // 5.) make sure that it's a read only value
  category: z.enum(categories, {
    errorMap: () => ({
      message: "Category is required",
    }),
  }),
});

// 8.) create a type from the schema (now we are ready to plug in React Hook Form)
type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  // 12.) destructure this form and pull out [handleSubmit, register, formState: { errors }]
  // 11.) use the useForm hook (with the right type) from react-hook-form and pass in the zodResolver with our schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    // 26.) add onSubmit to the form and pass in handleSubmit
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <div className="mb-3">
          <label htmlFor="description" className="label-form">
            Description
          </label>
          {/* 13.) register this input */}
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {/* 16.) add dynamic message for description */}
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          {/* 14.) register this input */}
          <input
            // 28.) instruct react-hook-form to interpret this value as a number
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {/* 17.) add dynamic message for amount */}
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          {/* 15.) register this select */}
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
          {/* 18.) add dynamic message for category */}
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
