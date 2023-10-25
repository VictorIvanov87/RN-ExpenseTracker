const { createContext, useReducer } = require("react");

const DUMMY_EXPENSES = [
  { id: "e1", description: "A pair of shoes", amount: 59.99, date: new Date("2022-12-19") },
  { id: "e2", description: "A pair of trousers", amount: 89.99, date: new Date("2023-02-11") },
  { id: "e3", description: "Banana", amount: 4.99, date: new Date("2022-01-06") },
  { id: "e4", description: "A book", amount: 8.55, date: new Date("2022-02-02") }
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {}
});

const expensesReducer = (state, action) => {
  switch (action.type) {
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
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

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
    addExpense,
    updateExpense,
    deleteExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
