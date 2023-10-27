import { useState, useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GLOBAL_STYLES } from "../constants/styles";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { ExpensesContext } from "../store/expenses-context";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;
  const expensesCtx = useContext(ExpensesContext);
  const selectedExpense = expensesCtx.expenses.find((exp) => exp.id === editExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    });
  }, [navigation]);

  const handleDeleteExpense = async () => {
    setIsSubmitting(true);

    try {
      expensesCtx.deleteExpense(editExpenseId);
      await deleteExpense(editExpenseId);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setError("Something went wrong, try again.");
    }

    setIsSubmitting(false);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfrim = async (expenseData) => {
    setIsSubmitting(true);

    try {
      if (isEditing) {
        expensesCtx.updateExpense(editExpenseId, expenseData);
        await updateExpense(editExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({ ...expenseData, id });
      }
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setError("Something went wrong, try again.");
    }

    setIsSubmitting(false);
  };

  const errorHandler = () => {
    setError(null);
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

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
