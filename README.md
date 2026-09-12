### Project Name:
# Dev Stack Builder

## Project Description

Dev Stack Builder is a React and TypeScript web application that allows developers to explore different technologies and build their own personalized development stack. Users can select technologies, view their details, and manage their selected stack easily.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Vite
- React Icons
- React Toastify
- JSON
- JavaScript (ES6)

## Features

- **Explore Technologies** — Browse technologies with their category, difficulty, rating, description, and icon.
- **Build Stack** — Add technologies to a personal stack and see the selected count in real time.
- **Manage Stack** — Remove individual technologies or clear the entire stack with toast notifications.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript.  
It makes React components easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.  
**State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.  
In this project, I used it this project in **Navbar**.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders.  
I used it to fetch the technology data from the JSON file when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.  
It helps React efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it to show an empty message when there are no technologies in the stack:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <YourStack />
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

-A parent passes data to a child using props.

-A child can send information back to the parent by calling a function passed through props.

For example:
<TechnologyCard
  technology={technology}
  onAdd={handleAddToStack}
/>
