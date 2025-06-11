// download custom hook called [useForm]
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  // call {useForm} to get a [form] object
  // const form = useForm();

  // destructure the [form] and grab [register]
  const { register, handleSubmit } = useForm();
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
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
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
