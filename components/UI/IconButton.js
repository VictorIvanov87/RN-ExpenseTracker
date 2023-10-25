import { View, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const IconButton = ({ name, color, size, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => (pressed ? styles.pressed : null)}>
      <View style={styles.buttonContainer}>
        <AntDesign name={name} color={color || "white"} size={size || 22} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    margin: 8,
    padding: 6
  },
  pressed: {
    opacity: 0.75
  }
});

export default IconButton;
