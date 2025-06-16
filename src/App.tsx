import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  // create dummy data for expenses
  const expenses = [
    { id: 1, description: "Groceries", amount: 50.0, category: "Food" },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 75.0,
      category: "Utilities",
    },
    { id: 3, description: "Gym Membership", amount: 30.0, category: "Health" },
  ];

  return (
    <div>
      {/* add the expense list */}
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}

export default App;
