import { categories } from "../../App";

// 1.) rafce
const ExpenseForm = () => {
  return (
    <form>
      {/* 2.) create form with three fields: description, amount, category | .mb-3>label.form-label+input.form-control */}
      <div className="mb-3">
        {/* 4.) use the same id here in the htmlFor, and set the label to whatever the id is  */}
        <label htmlFor="description" className="label-form">
          Description
        </label>
        {/* 3.) give it an id  */}
        <input id="description" type="text" className="form-control" />
      </div>
      {/* 5.) now we need .mb-3>label.form-label+input[type=number].form-control */}
      <div className="mb-3">
        {/* 7.) set htmlFor to [amount] and set the label to [Amount] */}
        <label htmlFor="" className="form-label">
          Amount
        </label>
        {/* 6.) set id to [amount] */}
        <input id="amount" type="number" className="form-control" />
      </div>
      {/* 8.) .mb-3>label.form-label+select.form-select */}
      <div className="mb-3">
        {/* 10.) set htmlFor to category and set the label to category */}
        <label htmlFor="category" className="form-label">
          Category
        </label>
        {/* 9.) set id to category */}
        <select name="" id="category" className="form-select">
          {/* 10.) inside this dropdown list we need an empty option */}
          <option value=""></option>
          {/* 15.) paste option mapping logic here (make sure to import pasted module's imports) */}
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {/* 16.)create submitButton button.btn.btn-primary */}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
