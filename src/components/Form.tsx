import { FormEvent, useRef } from "react";

// This component demonstrates using useRef to access form input values directly,
// as an alternative to using a form library like react-hook-form.

// useRef allows us to reference any DOM element, not just input fields.
// We specify the type parameter to ensure type safety for the referenced element.
const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  // Prevent the default form submission behavior (which reloads the page)
  // and read the input values using refs.
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current) person.name = nameRef.current.value;
    if (ageRef.current) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    // Handle form submission with the handleSubmit function.
    <form onSubmit={handleSubmit}>
      {/* Name input field */}
      <div className="mb-3">
        {/* Associate the label with the input using htmlFor and id */}
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* Attach the ref to access the input value */}
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      {/* Age input field */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>

      {/* Submit button */}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
