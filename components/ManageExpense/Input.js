import { View, Text, TextInput, StyleSheet } from "react-native";
import { GLOBAL_STYLES } from "../../constants/styles";

const Input = ({ label, textInputConfig, style, invalid }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[style, styles.inputContainer]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={[inputStyles, invalid && styles.invalidInput]} {...textInputConfig}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: GLOBAL_STYLES.colors.primary100,
    borderRadius: 6,
    color: GLOBAL_STYLES.colors.primary700,
    fontSize: 18,
    padding: 6
  },
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top"
  },
  invalidInput: {
    backgroundColor: GLOBAL_STYLES.colors.error50
  },
  invalidLabel: {
    color: GLOBAL_STYLES.colors.error500
  },
  label: {
    color: GLOBAL_STYLES.colors.primary100,
    fontSize: 12,
    marginBottom: 4
  }
});

export default Input;
