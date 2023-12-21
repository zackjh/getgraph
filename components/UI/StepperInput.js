import { StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import NumberInput from "./NumberInput";

export default function StepperInput({
  value,
  onDecrease,
  onIncrease,
  textWidth,
  allowTextInput = false,
  onChangeText,
  style,
}) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <IconButton
        icon="minus"
        mode="outlined"
        size={18}
        onPress={onDecrease}
        style={styles.button}
      />
      {allowTextInput ? (
        <NumberInput
          value={value}
          onChangeText={onChangeText}
          width={textWidth}
          textAlign="center"
          style={styles.textInput}
        />
      ) : (
        <Text variant="bodyLarge" style={{ ...styles.text, width: textWidth }}>
          {value}
        </Text>
      )}

      <IconButton
        icon="plus"
        mode="outlined"
        size={18}
        onPress={onIncrease}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: { marginHorizontal: 7 },
  text: {
    textAlign: "center",
    marginHorizontal: 7,
  },
  button: {
    marginHorizontal: 0,
  },
});
