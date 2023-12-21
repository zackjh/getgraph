import { StyleSheet, View } from "react-native";
import { IconButton, Text, TextInput, ToggleButton } from "react-native-paper";

export default function DataInput({
  dataArray,
  showSecondValueInput = false,
  onTitleChange,
  onValueChange,
  onSecondValueChange,
  onDeleteRow,
  onAddRow,
  allowNegative = false,
  onSignButtonToggle,
}) {
  return (
    <View style={styles.chartDataContainer}>
      <Text variant="headlineSmall" style={styles.chartDataTitle}>
        Data
      </Text>
      {dataArray.map((dataObj, index) => (
        <View key={index} style={styles.inputRow}>
          <TextInput
            value={dataObj.title}
            onChangeText={(newTitle) => onTitleChange(newTitle, index)}
            inputMode="text"
            mode="outlined"
            activeOutlineColor="#607D8B"
            style={styles.titleInput}
          />
          {allowNegative && (
            <ToggleButton.Row
              value={
                dataObj.value === 0
                  ? null
                  : dataObj.value > 0
                  ? "positive"
                  : "negative"
              }
              onValueChange={(newSign) => onSignButtonToggle(newSign, index)}
              style={styles.toggleButtonRow}
            >
              <ToggleButton
                icon="minus"
                size={18}
                value="negative"
                style={styles.toggleButton}
              />
              <ToggleButton
                icon="plus"
                size={18}
                value="positive"
                style={styles.toggleButton}
              />
            </ToggleButton.Row>
          )}
          <TextInput
            value={dataObj.value.toString()}
            onChangeText={(newValue) => onValueChange(newValue, index)}
            inputMode="decimal"
            mode="outlined"
            activeOutlineColor="#607D8B"
            style={styles.valueInput}
          />
          {showSecondValueInput && (
            <TextInput
              value={dataObj.secondValue.toString()}
              onChangeText={(newSecondValue) =>
                onSecondValueChange(newSecondValue, index)
              }
              inputMode="decimal"
              mode="outlined"
              activeOutlineColor="#607D8B"
              style={styles.valueInput}
            />
          )}
          <IconButton
            icon="close"
            iconColor="#1C1B1F"
            size={18}
            onPress={() => onDeleteRow(index)}
            style={styles.deleteRowButton}
          />
        </View>
      ))}
      <IconButton
        icon="plus"
        iconColor="#1C1B1F"
        mode="outlined"
        size={24}
        onPress={onAddRow}
        style={styles.addRowButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chartDataContainer: { paddingTop: 20 },
  chartDataTitle: { textAlign: "center", marginBottom: 20 },
  inputRow: {
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleInput: { width: 170, height: 40, bottom: 3 },
  valueInput: { width: 110, height: 40, bottom: 3 },
  toggleButtonRow: {},
  toggleButton: { width: 32, height: 32 },
  deleteRowButton: { marginHorizontal: 0 },
  addRowButton: { marginTop: 25, marginBottom: 50, alignSelf: "center" },
});
