import { View, StyleSheet } from "react-native";
import { GLOBAL_STYLES } from "../../constants/styles";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  { id: "e1", description: "A pair of shoes", amount: 59.99, date: new Date("2022-12-19") },
  { id: "e2", description: "A pair of trousers", amount: 89.99, date: new Date("2023-02-11") },
  { id: "e3", description: "Banana", amount: 4.99, date: new Date("2022-01-06") },
  { id: "e4", description: "A book", amount: 8.55, date: new Date("2022-02-02") }
];

const ExpensesOutput = ({ expenses, periodName }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GLOBAL_STYLES.colors.primary700,
    flex: 1,
    paddingBottom: 0,
    paddingHorizontal: 24,
    paddingTop: 24
  }
});

export default ExpensesOutput;
