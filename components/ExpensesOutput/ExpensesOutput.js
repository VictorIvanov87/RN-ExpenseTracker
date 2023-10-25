import { View, StyleSheet } from "react-native";
import { GLOBAL_STYLES } from "../../constants/styles";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({ expenses, periodName }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
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
