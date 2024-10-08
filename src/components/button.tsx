import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  text: string;
  disabled?: boolean;
}

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ onPress, text ,disabled}, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        onPress={onPress}
        disabled={disabled}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Button;
