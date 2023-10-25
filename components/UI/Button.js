import { View, Text, Pressable, StyleSheet } from "react-native";
import { GLOBAL_STYLES } from "../../constants/styles";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: GLOBAL_STYLES.colors.primary500,
    borderRadius: 4,
    padding: 8
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  flat: {
    backgroundColor: "transperent"
  },
  flatText: {
    color: GLOBAL_STYLES.colors.primary200
  },
  pressed: {
    backgroundColor: GLOBAL_STYLES.colors.primary100,
    borderRadius: 4,
    opacity: 0.75
  }
});

export default Button;
