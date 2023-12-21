import { useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function ChartPage({ children }) {
  const scrollViewRef = useRef(null);

  return (
    <ScrollView
      ref={scrollViewRef}
      automaticallyAdjustKeyboardInsets
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="handled"
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
      style={styles.scrollView}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { backgroundColor: "#ECEFF1" },
});
