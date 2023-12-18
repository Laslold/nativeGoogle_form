import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  Switch,
  Checkbox,
} from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { PaymentInfo, PaymentSchema } from "../../src/schema/checkout.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import ControllerInput from "../../src/component/Controllerinput";
import { useChekoutContext } from "../../src/context/ChekoutContext";

export default function Payment() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentSchema),
  });
  const { setPayment, onSubmitAll } = useChekoutContext();
  const router = useRouter();
  const theme = useTheme();
  const nextPage = async (data: PaymentInfo) => {
    // setPayment(data);
    const success = await onSubmitAll(data);
    if (success) {
      router.push("/");
    } else {
      Alert.alert("Failed to submit");
    }
    //Submit
  };
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        maxWidth: 500,
        alignSelf: "center",
        width: "100%",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"Payment details"} titleVariant="titleLarge" />
      </Card>
      <Card.Content style={{ gap: 15 }}>
        <ControllerInput
          control={control}
          name="card_number"
          placeholder="1111 2222 3333 4444 5555"
          label="Card number"
        />
        <View style={{ flexDirection: "row", gap: 15 }}>
          <ControllerInput
            control={control}
            name="date"
            placeholder="12/23"
            label="Expiration date"
          />
          <ControllerInput
            control={control}
            name="code"
            placeholder="Security code"
            label="Security code"
          />
        </View>
        <Controller
          control={control}
          name="info"
          render={({ field: { value, onChange } }) => (
            <Checkbox.Item
              label="Save payment information"
              onPress={() => onChange(!value)}
              status={value ? "checked" : "unchecked"}
            />
          )}
        />
      </Card.Content>
      <Text style={styles.text}>Payment details</Text>
      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Submit
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
