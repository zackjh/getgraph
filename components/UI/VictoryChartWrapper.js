import { useRef } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import { Button } from "react-native-paper";

export default function VictoryChartWrapper({ backgroundColor, children }) {
  // Define refs
  const imageRef = useRef();

  // Define event handlers
  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);

      if (localUri) {
        Alert.alert(
          "Chart saved",
          "An image of this chart has been saved to your photo library."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View ref={imageRef} style={{ backgroundColor: backgroundColor }}>
          {children}
        </View>
      </ScrollView>
      <Button
        mode="outlined"
        icon="download"
        onPress={onSaveImageAsync}
        textColor="#1C1B1F"
        style={styles.saveButton}
      >
        Save Chart
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#9D9BA1",
  },
  saveButton: {
    marginTop: 20,
    marginBottom: 25,
    alignSelf: "center",
  },
});
