import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Payment() {
  return (
    <View>
      <Text style={styles.text}>Payment details</Text>
      <Link href={"/checkout/delivery"}>Next</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
