# The Ultimate React Course - Part 1

This repository contains all of the code examples and exercise solutions for the first part of my Ultimate React course.

I have designed this course to teach you everything you need to know to become a proficient React developer. This course is the first part of a two-part series, covering the fundamentals. You'll learn how to:

- Build front-end apps with React and TypeScript
- Build reusable function components
- Style your components using vanilla CSS, CSS modules, and CSS-in-JS
- Manage component state
- Build forms with React Hook Forms
- Implement form validation using Zod
- Connect your React apps to the backend
- Deploy your React apps
- Use VSCode shortcuts to increase your productivity
- Write clean code like a pro
- Apply best practices

By the end of this course, you'll have a solid understanding of React and be able to build real-world applications with React and TypeScript.

You can find the full course at:

https://codewithmosh.com

## Building Forms

In this section, we'll cover how to build robust forms in React using modern tools:

1. **React Hook Form** – For efficient and scalable form state management.
2. **Zod** – For powerful and declarative schema-based form validation.

These tools will help you create user-friendly forms with minimal boilerplate and strong type safety.

> **Note:** To test your changes live, run `npm run dev` and visit the localhost page in your browser.

- The **useRef** hook allows you to reference a DOM element in your component.
- You can use `useRef` to access an input field and read its value when the form is submitted.
- In HTML, all input elements have a `value` property.

- If you see the error `"Property 'value' does not exist on type 'never'.ts(2339)"`, it's because TypeScript doesn't know that your ref is pointing to an HTML input element.
- To resolve this, you should specify the correct type for your ref (e.g., `useRef<HTMLInputElement>(null)`).
- When sending form data to a server, it's best practice to send an object containing all the relevant fields.

- **Why initialize every useRef with `null`?**

- The `current` property of a ref object is `null` before the component mounts, and then references the DOM node after mounting. This is why its type is either the DOM node or `null`.

- Alternatively, you can get the value of input fields using the state hook (`useState`). With this approach, every time the user types, the state updates and the component re-renders, keeping the input value in sync with your component's state.
