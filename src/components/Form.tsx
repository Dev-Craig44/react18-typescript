// download custom hook called [useForm]
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  // call {useForm} to get a [form] object
  // const form = useForm();

  // destructure the [form] and grab [register]
  // grab the [formState] property
  // we can use this errors object to show validation messages to the user
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // call register and give it a name of an input
  // console.log(register("name"));

  // - we would want to separte that logic into a function called `onSubmit`
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  // we no longer need a state hook to create a person object

  // we no longer need this submit handle, but I'll come back to this later

  return (
    // to handle a submit now, we call it as a function and give it a function as an argument (SubmitHandler)
    // submit handle is just a function that receives the data in this form

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* all input fields have a change event that is triggered every time the user types a keystroke */}
        {/* so we can handle this event and update our state variables every time the user types something in an input field */}
        <input
          // this register function returns an object, so if we spread this object all the properties of this [register] object will be added to this input field, same thing for age
          // as a second argument in the {register} method we can add validation to this name input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {/* the errors object could be empty, and we'll end up trying to access an undefined property so we need to put a "?" optional chaining operator so this expression is evauluated ONLY if we have the given condition (name, and errors), otherwise it's ignored */}
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
