import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import DateHeader from "../components/DateHeader";
import MoodDisplay from "../components/MoodDisplay";

export default function Home() {
  return(
    <View style={styles.container}>
      <DateHeader />
      <MoodDisplay />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
