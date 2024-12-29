import { View, Text, StyleSheet } from "react-native"

export default function DateHeader(){
  //Get Current date
  const currentDate = new Date();
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  })

  //Formatted Date
  const currentFormattedDate = dateFormatter.format(currentDate)

  return(
    <View style={styles.container}>
      <Text style={styles.text}>{currentFormattedDate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1098FF",
    alignItems: 'center',
  },
  text:{
    color: "white",
    fontSize: 20,
    padding: 20,
  }
})
