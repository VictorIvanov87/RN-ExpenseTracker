import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getFormattedDate } from "../../utils/date";
import Input from "./Input";
import Button from "../UI/Button";
import { GLOBAL_STYLES } from "../../constants/styles";

const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel, defaultValues }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : getFormattedDate(new Date()),
      isValid: true
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true
    }
  });

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value
    };

    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid = expenseData.date.toString() !== "Invalid Date";
    const isDescriptionValid = expenseData.description.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      setInputs((currState) => ({
        amount: { value: currState.amount.value, isValid: isAmountValid },
        date: { value: currState.date.value, isValid: isDateValid },
        description: { value: currState.description.value, isValid: isDescriptionValid }
      }));

      return;
    }

    onSubmit(expenseData);
  };

  const inputChangedHandler = (inputIdentifier, eneteredValue) => {
    setInputs((currState) => ({ ...currState, [inputIdentifier]: { value: eneteredValue, isValid: true } }));
  };

  const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (val) => inputChangedHandler("amount", val),
            value: inputs.amount.value
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (val) => inputChangedHandler("date", val),
            value: inputs.date.value
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: (val) => inputChangedHandler("description", val),
          value: inputs.description.value
        }}
      />
      {formIsInvalid && <Text style={styles.errorText}>Invalid input values</Text>}
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 8, minWidth: 120 },
  buttonsContainer: { alignItems: "center", flexDirection: "row", justifyContent: "center" },
  form: {
    marginTop: 40
  },
  errorText: {
    color: GLOBAL_STYLES.colors.error500,
    textAlign: "center",
    margin: 8
  },
  inputsRow: {
    flexDirection: "row"
  },
  rowInput: {
    flex: 1
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center"
  }
});

export default ExpenseForm;
