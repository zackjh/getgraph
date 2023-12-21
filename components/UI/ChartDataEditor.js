import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function ChartDataEditor({ children }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.containerTitle}>
        Data
      </Text>
      {children}
    </View>
  );
}

export function SingleValueEditor({ data }) {}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#9D9BA1",
  },
  containerTitle: {
    textAlign: "center",
    marginBottom: 20,
  },
});
