import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";

// 12.) export this so other modules can use it
// 11.) retrieve categories (real world, we would retrieve this from an API)
export const categories = ["Utilities", "Health", "Food"];
function App() {
  // use stateHook to store the list of expenses
  const [selectedCategory, setSetselectedCategory] = useState("");
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

  //  the reason we are not using a state variable for the visible expenses is because this is redundant, because this is something that we can calculate from the existing state variables
  // don't use state variables for things we can compute from the existing state variables
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* 17.) add expense form inside a div.mb-5 */}
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSetselectedCategory(category)}
        />
      </div>
      {/* add the expense list */}
      <ExpenseList
        expenses={visibleExpenses}
        // to delete we are going to pass a callback function that takes an id and calls {setExpenses}, passing a filtered list of expenses, with the expression being the we are going to pick eveything but this expense with the id
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
