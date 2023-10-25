import { useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GLOBAL_STYLES } from "../constants/styles";
import { StyleSheet } from "react-native";
import Button from "../components/UI/Button";

const ManageExpense = ({ route, navigation }) => {
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    });
  }, [navigation]);

  const handleDeleteExpense = () => {
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfrim = () => {
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
