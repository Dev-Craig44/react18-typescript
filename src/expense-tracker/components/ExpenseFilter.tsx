interface Props {
  onSelectCategory: (category: string) => void;
}

// This component is purely responsible for showing filters
// The act of filtering will be done in our App component, because that is where we maintain the state of the expenses
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      <option value="Utilities">Utilities</option>
      <option value="Health">Health</option>
      <option value="Food">Food</option>
    </select>
  );
};

export default ExpenseFilter;
