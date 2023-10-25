import { Text, View, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GLOBAL_STYLES } from "../../constants/styles";
import { getFormattedDate } from "../../utils/date";

const ExpenseItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManageExpense", { expenseId: id });
  };

  return (
    <Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.description, styles.textBase]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  amount: {
    color: GLOBAL_STYLES.colors.primary500,
    fontWeight: "bold"
  },
  amountContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 4,
    justifyContent: "center",
    minWidth: 80,
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4
  },
  expenseItem: {
    backgroundColor: GLOBAL_STYLES.colors.primary500,
    borderRadius: 6,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 12
  },
  textBase: {
    color: GLOBAL_STYLES.colors.primary50
  },
  pressed: {
    opacity: 0.75
  }
});

export default ExpenseItem;
