import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GLOBAL_STYLES } from "../constants/styles";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;
  const expensesCtx = useContext(ExpensesContext);
  const selectedExpense = expensesCtx.expenses.find((exp) => exp.id === editExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    });
  }, [navigation]);

  const handleDeleteExpense = () => {
    expensesCtx.deleteExpense(editExpenseId);
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfrim = (expenseData) => {
    console.log(expenseData);
    if (isEditing) {
      expensesCtx.updateExpense(editExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={handleCancel}
        onSubmit={handleConfrim}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton name="delete" color={GLOBAL_STYLES.colors.error500} size={36} onPress={handleDeleteExpense} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GLOBAL_STYLES.colors.primary800,
    flex: 1,
    padding: 24
  },
  deleteContainer: {
    alignItems: "center",
    borderTopColor: GLOBAL_STYLES.colors.primary200,
    borderTopWidth: 2,
    marginTop: 16,
    paddingTop: 8
  }
});

export default ManageExpense;
