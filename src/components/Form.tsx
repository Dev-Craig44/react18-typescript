import { FieldValues, useForm } from "react-hook-form";
// import [z] from 'zod'
import { z } from "zod";
// import [zodResolver] from 'react-hook-form-zod-resolver-zod'
import { zodResolver } from "@hookform/resolvers/zod";
// this object method will return will return an object that we can put in [schema] variable
const schema = z.object({
  // this represents the shape of our form.
  // here where we are shaping our form data, we can customize the error message by passing an object with the a message property
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  // the error message we got here was "Expected number, received string" this happened because the value property of input fields always returns a string, so we need to instruct react-hook-form to interpret this value as a number
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18" }),
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
    // now when calling a form hook, we pass a config object and set resolver to {zodResolver(schema)}, passing our schema object to it.
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
          // we can remove these validation rules because all of are validation rules are define in our
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {/* with this technique we don't need separted <p> elements for different error messages  */}
        {errors.name && (
          // so zod will take care of the genrating error messages baased on the schema that we defined
          <p className="text-danger">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && (
          // so zod will take care of the genrating error messages baased on the schema that we defined
          <p className="text-danger">{errors.age.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
