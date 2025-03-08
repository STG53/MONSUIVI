import ThemeProvider from "./assets/styles/themeProvider";
import HomeScreen from "./app/homeScreen";

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}
