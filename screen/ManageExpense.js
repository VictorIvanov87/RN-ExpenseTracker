import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GLOBAL_STYLES } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;
  const expensesCtx = useContext(ExpensesContext);

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

  const handleConfrim = () => {
    if (isEditing) {
      expensesCtx.updateExpense(editExpenseId, {
        description: "qweqwe",
        amount: 14.55,
        date: new Date()
      });
    } else {
      expensesCtx.addExpense({
        description: "asdasd",
        amount: 54.55,
        date: new Date()
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={handleCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleConfrim}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton name="delete" color={GLOBAL_STYLES.colors.error500} size={36} onPress={handleDeleteExpense} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 8, minWidth: 120 },
  buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" },
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
