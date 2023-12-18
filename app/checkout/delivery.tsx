import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  Button,
  Card,
  HelperText,
  RadioButton,
  TextInput,
  useTheme,
} from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { DeliveryInfo, DeliverySchema } from "../../src/schema/checkout.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import ControllerInput from "../../src/component/Controllerinput";

export default function Delivery() {
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm<DeliveryInfo>({
    resolver: zodResolver(DeliverySchema),
    defaultValues: {
      shipping: "free",
    },
  });
  const router = useRouter();
  const theme = useTheme();
  // const [shipping, setShipping] = useState("free");
  const nextPage = (data) => {
    //Submit
    router.replace("/checkout/payment");
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
        <Card.Title title={"Delivery address"} titleVariant="titleLarge" />
      </Card>
      <Card.Content style={{ gap: 15 }}>
        <ControllerInput
          control={control}
          name="city"
          placeholder="City"
          label="City"
        />
        <ControllerInput
          control={control}
          name="postal_code"
          placeholder="Postal Code"
          label="Postal Code"
        />
        <ControllerInput
          control={control}
          name="address"
          placeholder="Address"
          label="Address"
        />
      </Card.Content>

      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"Shipping options"} titleVariant="titleLarge" />
      </Card>
      <Card.Content style={{ gap: 15 }}>
        <Controller
          control={control}
          name="shipping"
          render={({
            field: { value, onChange },
            fieldState: { invalid, error },
          }) => (
            <View>
              <HelperText type="error" visible={invalid}>
                {error?.message}
              </HelperText>
              <RadioButton.Group
                value={value}
                onValueChange={(value) => onChange(value)}
              >
                <RadioButton.Item label="Free" value="free" />
                <RadioButton.Item label="Fast" value="fast" />
                <RadioButton.Item label="Same day" value="same_day" />
              </RadioButton.Group>
            </View>
          )}
        />
      </Card.Content>

      {/* <Link href={"/"}>Home</Link> */}
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
