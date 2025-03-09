import { Redirect, Tabs } from "expo-router";
import CustomNavBar from "@/composantes/CustomNavBar";
import { useAuth } from "@/store/authStore";

export default function TabLayout() {
  /*
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }
*/
  return (
    <Tabs tabBar={(props) => <CustomNavBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Settings",
        }}
      />
    </Tabs>
  );
}
