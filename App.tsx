import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import dashboardStyles from "./assets/styles/style";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={dashboardStyles.titre1SMP}>Mon suivi modif</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
