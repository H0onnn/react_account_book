import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [formState, setFormState] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setFormState(false);
  };

  const addNewExpenseHandler = () => {
    setFormState(true);
  };

  const cancelHandler = () => {
    setFormState(false);
  };

  let formContent = (
    <button onClick={addNewExpenseHandler}>Add New Expense</button>
  );

  if (formState) {
    formContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseData}
        onCancel={cancelHandler}
      />
    );
  }

  return <div className="new-expense">{formContent}</div>;
}

export default NewExpense;
