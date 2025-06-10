// import { FieldValues, useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

import { FormEvent, useRef } from "react";

// const schema = z.object({
//   name: z.string().min(3, { message: "Name must be at least 3 characters." }),
//   age: z
//     .number({ invalid_type_error: "Age field is required." })
//     .min(18, { message: "Age must be at least 18." }),
// });

// type FormData = z.infer<typeof schema>;

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//   } = useForm<FormData>({ resolver: zodResolver(schema) });

//   const onSubmit = (data: FieldValues) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           {...register("name")}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//         {errors.name && <p className="text-danger">{errors.name.message}</p>}
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input
//           {...register("age", { valueAsNumber: true })}
//           id="age"
//           type="number"
//           className="form-control"
//         />
//         {errors.age && <p className="text-danger">{errors.age.message}</p>}
//       </div>
//       <button disabled={!isValid} className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

// use rafce to create a function component

// submit message is disappearing because by default, when we submit an HTML form, that form is posted to the server, so we get a full page reload
// solve this by preventing this default behavior

const Form = () => {
  // common practice is to pass [null] to the useRef hook.
  // this returns a reference object, so lets put it in a [nameRef] in a const
  // because we're using useRef we can reference any element in the DOM not input fields
  // specify the type in useRef to fix that
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };
  // when moving attributes from a element, hover over the word and you'll see the tool tip with the type
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current) person.name = nameRef.current.value;
    if (ageRef.current) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    // to handle form submission we handle the [onSubmit] event just like we do on a click event
    // give our arrow funcrion a [event] parameter and place expression inside curly braces
    <form
      // if the logic inside this onSubmit attribute gets too complicated it maybe best to move this logic to it's on file
      // note that I'm not calling this function. I'm just refrencing it.
      onSubmit={handleSubmit}
    >
      {/* // I want to create some markup but I don't want to create it all by hand
      // add a div.mb-3 which is a div with the classname of mb-3 (margin bottom 3) | utility class in bootstrap
      // inside the div we want to add a label with the class "form-label" [div.mb-3>label.from-label]
      // right next to that we want to add an input with a class of form-control [div.mb-3>label.from-label+input.form-control] */}
      <div className="mb-3">
        {/* Set the htmlFor to the ID of this input, so when a user clicks on a label the input automatically gets focused */}
        {/* give this label an id [name] and use [name] for htmlFor */}
        {/* we need to associatre our nameRef with this id */}
        <label id="name" htmlFor="name" className="from-label">
          Name
        </label>
        <input ref={nameRef} type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>

      {/* add sumbit button */}
      {/* use button.btn.btn-primary */}
      {/* set type to submit */}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
