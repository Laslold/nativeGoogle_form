import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import {
  Button,
  Card,
  HelperText,
  TextInput,
  useTheme,
} from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfo,
  PersonalInfoSchema,
} from "../../src/schema/checkout.shema";
import ControllerInput from "../../src/component/Controllerinput";
import ChekoutContextProvider, {
  useChekoutContext,
} from "../../src/context/ChekoutContext";

export default function PersonalDetails() {
  const { handleSubmit, control } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });
  const { setPersonal } = useChekoutContext();

  const router = useRouter();
  const theme = useTheme();
  const nextPage = (data: PersonalInfo) => {
    setPersonal(data);

    router.push("/checkout/delivery");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        maxWidth: 500,
        width: "100%",
        alignSelf: "center",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title
          title={"Personal information"}
          titleVariant="headlineLarge"
        />
        <Card.Content style={{ gap: 15 }}>
          <ControllerInput
            control={control}
            name="name"
            placeholder="Name"
            label="Name"
          />
          <ControllerInput
            control={control}
            name="email"
            placeholder="name@mail.com"
            label="Email"
          />
        </Card.Content>
      </Card>
      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Next
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
