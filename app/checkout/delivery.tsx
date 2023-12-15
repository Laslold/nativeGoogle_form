import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Delivery() {
  return (
    <View>
      <Text style={styles.text}>Delivery details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
