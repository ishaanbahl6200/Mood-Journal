import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "../contexts/NavigationContext";
import Tracker from "../views/Tracker";

export default function DateHeader(){
  //Get Current date
  const currentDate = new Date();
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  //Formatted Date
  const currentFormattedDate = dateFormatter.format(currentDate);

  //Navigate function will allow for a new current view to be set
  const {navigate} = useNavigation();

  return(
    <View style={styles.container}>
      {/* Swap to tracker view */}
      <TouchableOpacity onPress={()=>navigate(<Tracker />)}>
        <Text style={styles.text}>{currentFormattedDate}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1098FF",
    alignItems: "center",
  },
  text:{
    color: "white",
    fontSize: 20,
    padding: 20,
  }
});
