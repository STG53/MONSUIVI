import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { BlurView } from "expo-blur";
// eslint-disable-next-line no-unused-vars
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import React from "react";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const COLORS = {
  primary: "#222225",
  secondary: "#B5CBD2",
};

const ICONS: Record<string, React.ReactNode> = {
  index: <Feather name="home" size={32} color={COLORS.primary} />,
  settings: (
    <Ionicons name="settings-outline" size={32} color={COLORS.primary} />
  ),
};

const CustomNavBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => (
  <BlurView intensity={30} style={styles.container}>
    {state.routes.map((route, index) => {
      if (["_sitemap", "+not-found"].includes(route.name)) return null;

      const { options } = descriptors[route.key];
      const label = options.tabBarLabel ?? options.title ?? route.name;
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });
        if (!isFocused && !event.defaultPrevented)
          navigation.navigate(route.name, route.params);
      };

      return (
        <AnimatedTouchableOpacity
          key={route.key}
          onPress={onPress}
          layout={LinearTransition.springify().mass(0.5)}
          style={[
            styles.tabItem,
            isFocused && { backgroundColor: COLORS.secondary },
          ]}
        >
          {ICONS[route.name] || ICONS.index}
          {isFocused && (
            <Animated.Text
              entering={FadeIn.duration(200)}
              exiting={FadeOut.duration(200)}
              style={styles.text}
            >
              {label as string}
            </Animated.Text>
          )}
        </AnimatedTouchableOpacity>
      );
    })}
  </BlurView>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "100%",
    alignSelf: "center",
    bottom: 0,
    paddingTop: 10,
    paddingBottom: 30,
    height: Platform.OS === "ios" ? 100 : 80,
  },
  tabItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text: {
    marginLeft: 8,
    fontWeight: "500",
    fontFamily: "VremenaGroteskBook",
  },
});

export default CustomNavBar;
