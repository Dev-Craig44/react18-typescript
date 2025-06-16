import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  // use stateHook to store the list of expenses

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50.0, category: "Food" },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 75.0,
      category: "Utilities",
    },
    { id: 3, description: "Gym Membership", amount: 30.0, category: "Health" },
  ]);
  return (
    <div>
      {/* add the expense list */}
      <ExpenseList
        expenses={expenses}
        // to delete we are going to pass a callback function that takes an id and calls {setExpenses}, passing a filtered list of expenses, with the expression being the we are going to pick eveything but this expense with the id
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
