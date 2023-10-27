import { View, StyleSheet, Text } from "react-native";
import { GLOBAL_STYLES } from "../../constants/styles";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({ expenses, periodName, fallbackText }) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      {content}
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
  },
  infoText: {
    color: "white",
    fontSize: 16,
    marginTop: 32,
    textAlign: "center"
  }
});

export default ExpensesOutput;
