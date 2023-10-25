import { View, Text, StyleSheet } from "react-native";
import { GLOBAL_STYLES } from "../../constants/styles";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: GLOBAL_STYLES.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8
  },
  period: {
    color: GLOBAL_STYLES.colors.primary400,
    fontSize: 12
  },
  sum: {
    color: GLOBAL_STYLES.colors.primary500,
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default ExpensesSummary;
