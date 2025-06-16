import { FieldValues, useForm } from "react-hook-form";
// import [z] from 'zod'
import { z } from "zod";

// this object method will return will return an object that we can put in [schema] variable
const schema = z.object({
  // this represents the shape of our form.
  name: z.string().min(3),
  age: z.number().min(18),
});

// a good thing about Zod is that it has a method that allows us to extract a type from a schema object
// so we don't have to type this interface by hand
// z.infer<typeof schema>
// this returns a typescript type which is similar to an interface
// store this type call FormData
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
