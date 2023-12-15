import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function PersonalDetails() {
  return (
    <View>
      <Text style={styles.text}>Personal Details</Text>
      <Link href={"/checkout/payment"}>Next</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
