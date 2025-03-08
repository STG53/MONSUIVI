import { View, Text, Switch, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useTheme } from "../assets/styles/themeProvider";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import dashboardStyles from "../assets/styles/style";

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <SafeAreaView
      style={[
        dashboardStyles.containerSMP,
        isDarkMode
          ? dashboardStyles.darkContainer
          : dashboardStyles.lightContainer,
      ]}
    >
      <Text
        style={[
          dashboardStyles.text,
          isDarkMode ? dashboardStyles.darkText : dashboardStyles.lightText,
        ]}
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Text>
      <View style={styles.switchContainer}>
        <Icon
          name={isDarkMode ? "weather-night" : "weather-sunny"}
          size={30}
          color={isDarkMode ? "#fff" : "#000"}
        />
        <Switch
          trackColor={{ false: "#757577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5bb4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode}
          style={styles.switch}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  darkText: {
    color: "#fff",
  },
  lightText: {
    color: "#000",
  },

  switchContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
});
