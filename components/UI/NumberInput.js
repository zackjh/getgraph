import { StyleSheet, View } from "react-native";
import { TextInput, ToggleButton } from "react-native-paper";

export default function NumberInput({
  value,
  onChangeText,
  width,
  showSignButton = false,
  textAlign = "left",
  style,
}) {
  // Define event handlers
  function handleToggle(newSign) {
    if (newSign === -1 && value > 0) {
      onChangeText(String(value * -1));
    } else if (newSign === 1 && value < 0) {
      onChangeText(String(value * -1));
    }
  }

  function handleChangeText(newText) {
    const numberRegex = /^-?\d*\.?\d*$/;

    if (newText === "-") {
      onChangeText("0");
    } else if (newText === ".") {
      onChangeText("0");
    } else if (newText === "") {
      onChangeText("0");
    } else if (numberRegex.test(newText)) {
      onChangeText(newText);
    }
  }

  return (
    <View style={{ ...styles.container, ...style }}>
      {showSignButton && (
        <ToggleButton.Row
          value={Math.sign(value)}
          onValueChange={(newSign) => handleToggle(newSign)}
          style={styles.toggleButtonRow}
        >
          <ToggleButton
            icon="minus"
            size={18}
            value={-1}
            style={styles.toggleButton}
          />
          <ToggleButton
            icon="plus"
            size={18}
            value={1}
            style={styles.toggleButton}
          />
        </ToggleButton.Row>
      )}
      <TextInput
        value={String(value)}
        onChangeText={handleChangeText}
        inputMode="decimal"
        mode="outlined"
        activeOutlineColor="#607D8B"
        style={{ ...styles.textInput, width: width, textAlign: textAlign }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  toggleButtonRow: {
    marginRight: 6,
  },
  toggleButton: { width: 32, height: 32 },
  textInput: { height: 40, bottom: 3 },
});
