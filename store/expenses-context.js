const { createContext, useReducer } = require("react");

export const ExpensesContext = createContext({
  expenses: [],
  setExpenses: (expenses) => {},
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {}
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "SET": {
      const invertedExpensesArray = action.payload.reverse();
      return invertedExpensesArray;
    }
    case "ADD": {
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    }
    case "DELETE": {
      return state.filter((expense) => expense.id !== action.payload);
    }
    case "UPDATE": {
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    }
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const setExpenses = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
  };

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, data) => {
    dispatch({ type: "UPDATE", payload: { id, data } });
  };

  const value = {
    expenses: expensesState,
    setExpenses,
    addExpense,
    updateExpense,
    deleteExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
