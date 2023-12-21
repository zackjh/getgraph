import { StyleSheet, View } from "react-native";
import { Chip, IconButton, Text, TextInput } from "react-native-paper";
import NumberInput from "./NumberInput";
import StepperInput from "./StepperInput";

export default function ChartSettings({ children }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.containerTitle}>
        Settings
      </Text>
      {children}
    </View>
  );
}

export function TextInputRow({ label, value, onChangeText, width }) {
  return (
    <View style={styles.row}>
      <Text variant="titleMedium">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        inputMode="text"
        mode="outlined"
        activeOutlineColor="#607D8B"
        style={{ ...styles.textInput, width: width }}
      />
    </View>
  );
}

export function NumberInputRow({
  label,
  value,
  onChangeText,
  width,
  showSignButton = false,
  textAlign,
}) {
  return (
    <View style={styles.row}>
      <Text variant="titleMedium">{label}</Text>
      <NumberInput
        value={value}
        onChangeText={onChangeText}
        width={width}
        showSignButton={showSignButton}
        textAlign={textAlign}
      />
    </View>
  );
}

export function StepperInputRow({
  label,
  value,
  onDecrease,
  onIncrease,
  textWidth,
  allowTextInput = false,
  onChangeText,
}) {
  return (
    <View style={styles.row}>
      <Text variant="titleMedium">{label}</Text>
      <StepperInput
        value={value}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        textWidth={textWidth}
        allowTextInput={allowTextInput}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export function ColorInputRow({ label, value, onChipPress, onReset }) {
  return (
    <View style={styles.row}>
      <Text variant="titleMedium">{label}</Text>
      <View style={styles.colorInputContainer}>
        <Chip
          onPress={onChipPress}
          style={{ ...styles.colorInputChip, backgroundColor: value }}
        />
        <IconButton
          icon="restore"
          iconColor="#1C1B1F"
          size={18}
          onPress={onReset}
          style={styles.resetColorButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#9D9BA1",
  },
  containerTitle: { textAlign: "center", marginBottom: 20 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 25,
  },
  textInput: { height: 40, bottom: 3 },
  colorInputContainer: {
    width: 95,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  colorInputChip: {
    width: 50,
    height: 35,
    borderWidth: 1,
  },
  resetColorButton: {
    marginHorizontal: 0,
  },
});
