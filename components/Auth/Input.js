import { View, Text, TextInput, StyleSheet } from "react-native";

import { GLOBAL_STYLES } from "../../constants/styles";

const Input = ({ label, keyboardType, secure, onUpdateValue, value, isInvalid }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: GLOBAL_STYLES.colors.primary100,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 8
  },
  inputContainer: {
    marginVertical: 8
  },
  inputInvalid: {
    backgroundColor: GLOBAL_STYLES.colors.error100
  },
  label: {
    color: "white",
    marginBottom: 4
  },
  labelInvalid: {
    color: GLOBAL_STYLES.colors.error500
  }
});
