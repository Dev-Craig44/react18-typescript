// 13.) import categories from App
import { categories } from "../../App";

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
      {/* 14.) dynamically render the options */}
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
