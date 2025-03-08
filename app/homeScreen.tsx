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
      <View style={dashboardStyles.switchContainer}>
        <Switch
          trackColor={{ false: "#B6BFD3", true: "#fff" }}
          thumbColor={isDarkMode ? "#B6BFD3" : "#000"}
          ios_backgroundColor="#B6BFD3"
          onValueChange={toggleTheme}
          value={isDarkMode}
          style={dashboardStyles.switch}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
