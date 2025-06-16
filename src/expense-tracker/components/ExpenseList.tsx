// (2) here we are defining the shape of our expense object that lives inside the Props object.
interface Expense {
  id: number;
  description: string;
  amount: number;
  // in the real world, category is going to be an object with two properties: id and name, but for simplicity, we're going to use a string here
  category: string;
}

// (1) let's shape our Props
interface Props {
  // (2) we're not going to use a type like string[], number[], etc. because each expenses is going to be an Expense object, and we can shape that object ourselves
  expenses: Expense[];
  // (3**) to do this we need a callback function
  onDelete: (id: number) => void;
}

//  let's add the props to our component
// (3***) add this callback funcrtion to the Props
const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    // we want to return a table with two classes
    // 1.) table (this is essential for all tables in Bootstrap)
    // 2.) table-bordered (to give it nice borders)
    // table.table.table-bordered
    <table className="table table-bordered">
      {/* inside this table we need to add a [thead]  */}
      {/* inside this [thead] we need a [tr] with 4 [th] elements  */}
      {/* thead>tr>th*4 */}
      <thead>
        <tr>
          {/* define our headings */}
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          {/* we're going to leave out this, because this is where we are going to have the delete button */}
          <th></th>
        </tr>
      </thead>
      {/* after the [thead] we need a [tbody] */}
      <tbody>
        {/* inside this [tbody] we need a [tr] with 4 [td] elements  */}
        {/* tbody>tr>td*4 */}

        {/*  (1) here we need to render our expenses, but we don't want to render the expenses in this component, we want to pass them as props so this will be a reuseable component*/}
        {/* grab our expenses and map them to [tr] elements, so each [tr] needs to have a key (expense.id) */}
        {expenses.map((expense) => (
          <tr key={expense.id}>
            {/* inside this [tr], we need four [td] elements `td*4` */}
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            {/* this last [td] we are going to use to render a button with two classes [btn, btn-outline-danger]*/}
            {/* the outline doesn't have a backgroundColor is only has a border */}
            <td>
              {/* because the list of expenses is passed here via props, it's maintained somewhere else inside the parent component */}
              {/* The component that holds the state should be the one updating it */}
              {/* (3*) when a user clicks on the delete button, we don't want it to the expense here, we should notify the parent or the consumer of this component that an expense should be deleted */}
              <button
                className="btn btn-outline-danger"
                // (3****) add the onDelete callback function as the onChange event handler
                onChange={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      {/* now lets add the tfoot element */}
      {/* inside the [tfoot] is a [tr] */}
      {/* inside the [tr] we need four [td] elements */}
      {/* tfoot>tr>td*4 */}
      <tfoot>
        <tr>
          <td>Total</td>
          {/* calulate the total dynamically here */}
          {/* get the amount of the expense and add it to the acc... */}
          <td>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
