import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";

export const categories = ["Utilities", "Health", "Food"];

function App() {
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

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSetselectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
