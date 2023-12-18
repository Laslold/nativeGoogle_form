import { Slot } from "expo-router";
import { PaperProvider, MD3LightTheme } from "react-native-paper";

export default function RootLayout() {
  const theme = {
    ...MD3LightTheme,
    roundness: 1,
  };

  return (
    <PaperProvider theme={theme}>
      <Slot />
    </PaperProvider>
  );
}
