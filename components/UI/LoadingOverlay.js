import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GLOBAL_STYLES } from "../../constants/styles";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
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
  }
});

export default LoadingOverlay;
