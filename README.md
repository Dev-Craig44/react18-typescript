# The Ultimate React Course - Part 1

This repository contains all of the code examples and exercise solutions for the first part of my Ultimate React course.

I have designed this course to teach you everything you need to know to become a proficient React developer. This course is the first part of a two-part series, covering the fundamentals. You'll learn how to:

- Build front-end apps with React and TypeScript
- Build reusable function components
- Style your components using vanilla CSS, CSS modules, and CSS-in-JS
- Manage component state
- Build forms with React Hook Form
- Implement form validation using Zod
- Connect your React apps to the backend
- Deploy your React apps
- Use VSCode shortcuts to increase your productivity
- Write clean code like a pro
- Apply best practices

By the end of this course, you'll have a solid understanding of React and be able to build real-world applications with React and TypeScript.

You can find the full course at:  
https://codewithmosh.com

---

## Building Forms

In this section, we'll cover how to build robust forms in React using modern tools:

1. **React Hook Form** – For efficient and scalable form state management.
2. **Zod** – For powerful and declarative schema-based form validation.

These tools will help you create user-friendly forms with minimal boilerplate and strong type safety.

> **Note:** To test your changes live, run `npm run dev` and visit the localhost page in your browser.

---

## Key Concepts for Building Forms

### Handling Form Submission

- Set the `onSubmit` attribute on your `<form>` element to handle form submissions.
- Use the `handleSubmit` function from React Hook Form to manage submission logic and validation.

### Accessing Input Fields

- **Using the `useRef` Hook:**  
  The `useRef` hook allows you to reference a DOM element in your component.  
  You can use `useRef` to access an input field and read its value when the form is submitted.  
  In HTML, all input elements have a `value` property.

  - If you see the error `"Property 'value' does not exist on type 'never'.ts(2339)"`, it's because TypeScript doesn't know that your ref is pointing to an HTML input element. Specify the correct type for your ref (e.g., `useRef<HTMLInputElement>(null)`).
  - The `current` property of a ref object is `null` before the component mounts, and then references the DOM node after mounting. This is why its type is either the DOM node or `null`.

- **Using the `useState` Hook:**  
  Alternatively, you can get the value of input fields using the state hook (`useState`). With this approach, every time the user types, the state updates and the component re-renders, keeping the input value in sync with your component's state.  
  When sending form data to a server, it's best practice to send an object containing all the relevant fields.

---

## Controlled Components

- Each input element manages its own internal state, but in our example, we're also using a `person` object to track form data. This can lead to situations where the input's state and the `person` state become unsynchronized.
- To avoid this, it's best to use React as the single source of truth by managing all input values through component state.

---

## Managing Forms with React Hook Form

As your forms grow in complexity, managing state with the `useState` hook can become tedious and error-prone. For every input field, you need to set both `onChange` and `value` attributes, which quickly leads to repetitive code.

This is where [React Hook Form](https://react-hook-form.com/) comes in. This popular library lets you build forms quickly and efficiently, with less boilerplate.

To install React Hook Form, run:

```bash
npm i react-hook-form@latest
```

When you use React Hook Form, you get access to a variety of helpful methods and properties, such as:

- `register` – Registers an input or select element and applies validation rules.
- `handleSubmit` – Handles form submission and validation.
- `watch` – Watches input value changes.
- `reset` – Resets the form values and state.
- `setValue` – Manually sets an input value.
- `setError` – Manually sets an error on a field.
- `clearErrors` – Clears errors on fields.
- `formState` – Contains information about the form's state (e.g., errors, touched fields).
- `control` – Used for advanced use cases and integrating with custom components.

React Hook Form uses refs to access input values, so your components don't re-render on every keystroke. This makes it highly performant, even for large forms.

> In real-world applications, submitting a form often involves more than just logging data—you'll typically validate input, handle errors, and send data to a backend server.

---

## Validation

- When we type `errors.` in TypeScript, we don't see autocomplete suggestions for our input field names.
- This happens because the TypeScript compiler isn't aware of the specific fields in our form.
- To improve both the development experience and type safety, we should define an interface that describes the shape of our form data.
- By specifying an interface, TypeScript can provide better autocompletion and catch errors at compile time.

---

## Schema-based Validation with Zod

As your forms become more complex, managing validation rules scattered throughout your code can get messy. To address this, it's best to use **schema-based validation**.

Popular validation libraries include:

1. **Joi**
2. **Yup**
3. **Zod**

In this course, we'll use **Zod** for its strong TypeScript support and simplicity.

To integrate React Hook Form with Zod, install the resolver package:

```bash
npm i @hookform/resolvers
```

This package provides resolvers for various schema-based validation libraries, including Zod, Joi, and others.

---

## 🧾 Build Expense Tracker (Vite + React + TypeScript)

This exercise focuses on building a dynamic and type-safe expense tracker using **Vite**, **React**, and **TypeScript**, with schema-based validation using **Zod** and **React Hook Form**.

### 🛠️ Instructions

1. **Setup:**

   - Initialize the project with Vite and TypeScript.
   - Install dependencies:
     ```bash
     npm install react-hook-form zod
     ```

2. **Build the UI:**

   - Create a table to display expense entries with three fields: `Description`, `Amount`, and `Category`.
   - Add a dropdown to filter by category.
   - Add delete buttons to remove individual entries.

3. **Add the Expense Form:**

   - Create a form with inputs for each field.
   - Use `React Hook Form` to manage form state.
   - Use `Zod` for schema validation.
     - Description: Minimum 3 characters
     - Amount: Required & positive number
     - Category: Required

4. **Validation Display:**

   - Show inline validation messages under each field.

5. **Bonus:**
   - Disable the Submit button until the form is valid.
   - Clear the form on successful submission.

---

## Project Structure Tip

- Since we're building a mini project, it's best to create a new folder under the `src` directory named `expense-tracker`.
- This folder will contain all the components and logic for the Expense Tracker app.
- Organizing your code this way helps structure larger or more complex applications. For example, instead of placing every component in a single `components` folder, you can group related features into separate modules or domains.
- Think of it like a supermarket, where different sections (like dairy or bakery) keep things organized and easy to find.

---

## Expense Filter

- In the future, we may want to filter expenses by various parameters. To accommodate this, our filter component will be designed to support multiple types of filters.

---

## Expense Form

- Integrate the Expense Form with React Hook Form and Zod for robust validation and state management.

---

## Terms & Summary

- To handle form submissions, set the `onSubmit` attribute of the form element.
- Use the `ref` hook to access elements in the DOM. This technique is often used to read the value of input fields upon submitting a form.
- You can also use the `state` hook to create state variables and update them as the user types into input fields. With this technique, every time the user types a character into an input field, the component containing the form gets re-rendered. While in theory this can cause a performance penalty, in practice this is often negligible.
- **React Hook Form** is a popular library that helps us build forms quickly with less code. With React Hook Form, we no longer have to worry about using the ref or state hooks to manage the form state.
- React Hook Form supports the standard HTML attributes for data validation such as `required`, `minLength`, etc.
- We can validate our forms using schema-based validation libraries such as **joi**, **yup**, **zod**, etc. With these libraries, we can define all our validation rules in a single place called a schema.
