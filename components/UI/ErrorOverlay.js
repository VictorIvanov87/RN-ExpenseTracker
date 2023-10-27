import { View, Text, StyleSheet } from "react-native";
import { GLOBAL_STYLES } from "../../constants/styles";
import Button from "./Button";

const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Ok</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: GLOBAL_STYLES.colors.primary700,
    flex: 1,
    justifyContent: "center",
    padding: 24
  },
  text: {
    color: "white",
    marginBottom: 8,
    textAlign: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default ErrorOverlay;
