import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
//  23.) import categories from "./expense-tracker/categories";

// 20.) move this to a separate file called `categories.ts`
// 6.) add `as const` to make sure that the categories are read only
// export const categories = ["Utilities", "Health", "Food"] as const;

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
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
          onSelectCategory={(category) => setSelectedCategory(category)}
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
