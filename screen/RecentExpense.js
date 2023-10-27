import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";

const RecentExpense = () => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    };

    getExpenses();
  }, [fetchExpenses]);
  const recentExpenses = expensesCtx.expenses.filter((exp) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return exp.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput periodName="Last 7 days" expenses={recentExpenses} fallbackText="No expenses for the last 7 days" />
  );
};

export default RecentExpense;
