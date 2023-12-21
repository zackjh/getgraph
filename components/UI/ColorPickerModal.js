import { StyleSheet, View } from "react-native";
import { Modal, Portal } from "react-native-paper";
import ColorPicker, { Panel5 } from "reanimated-color-picker";

export default function ColorPickerModal({
  visible,
  value,
  onDismiss,
  onComplete,
}) {
  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss}>
        <View style={styles.container}>
          <ColorPicker value={value} onComplete={onComplete}>
            <Panel5 style={styles.panel} />
          </ColorPicker>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 23,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  panel: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
