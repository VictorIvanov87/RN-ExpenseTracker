import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";

const RecentExpense = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((exp) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return exp.date > date7DaysAgo;
  });

  return <ExpensesOutput periodName="Last 7 days" expenses={recentExpenses} />;
};

export default RecentExpense;
