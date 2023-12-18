import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ChekoutContextProvider from "../../src/context/ChekoutContext";

export default function CheckoutStack() {
  return (
    <ChekoutContextProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: { padding: 15, backgroundColor: "#f0fbe8", flex: 1 },
          headerStyle: { backgroundColor: "#673ab8" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "#f0fbe8",
        }}
      >
        <Stack.Screen
          name="personal"
          options={{ title: "Personal information" }}
        />

        <Stack.Screen
          name="delivery"
          options={{ title: "Delivery information" }}
        />
        <Stack.Screen
          name="payment"
          options={{ title: "Payment information" }}
        />
      </Stack>
    </ChekoutContextProvider>
  );
}
