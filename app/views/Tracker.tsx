import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from "../contexts/NavigationContext";
import Home from "./Home";
import { useSavedMoods } from "../contexts/SavedMoodsContext";

export default function Tracker(){

  //Allows for switching of views
  const {navigate} = useNavigation();

  //All saved moods
  const {moodsSavedList} = useSavedMoods();

    //Formatted Date
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  


  return(
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Back to home view button */}
        <TouchableOpacity onPress={()=>{navigate(<Home />)}}>
          <Image
            style={styles.backToHomeButtonImage} 
            source={require("../../assets/images/returnToMainViewKey.png")}/>
        </TouchableOpacity>
        <Text style={styles.text}>Daily Tracker!</Text>
      </View>
      {/* Tracker List */}
      <FlatList
      data={moodsSavedList}
      renderItem={({item: mood}) =>(
        //Main Container for each saved track 
        <View style={styles.savedMoodsContainer}>
          {/* Main container for the text aspects */}
          <View style={styles.savedTextContainer}>
            {/* Container for the date */}
            <View>
              {/* Format will folow: Saturday, Dec.31st*/}
              <Text style={styles.savedDateText}>
                {dateFormatter.format(mood.time)} @  
                {" " + (mood.time.getHours() % 12 || 12)}:{mood.time.getMinutes().toString().padStart(2, "0") + " "}
                {mood.time.getHours() >= 12 ? "PM" : "AM"}</Text>
            </View>
            {/* Container for the mood text */}
            <View style={styles.moodTextContainer}>
              <Text style={styles.moodWordText}>Mood: </Text>
              <Text style={styles.savedMoodsVariableText}>{mood.moodSaved.mood}</Text>
            </View>
          </View>
          {/* Section for the image */}
          <View style={styles.savedEmojisContainer}>
            <Image style={styles.savedMoodsEmojiImage} source={mood.moodSaved.emoji}></Image>
          </View>
        </View>)}
      // Using index as we don't have a unique key for each mood in the tracker list
      keyExtractor={(mood, index) => index.toString()}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  headerContainer:{
    backgroundColor: "#1098FF",
    alignItems: "center",
    justifyContent:"center",
    flexDirection: "row",
  },
  text:{
    color: "white",
    fontSize: 20,
    padding: 20,
  },
  backToHomeButtonImage:{
    height: 20,
    width:20,
  },
  savedMoodsContainer:{
    backgroundColor:"rgb(235, 235, 235)",
    flexDirection:"row",
    margin:20,
    borderRadius:10,
  },
  savedTextContainer:{
    padding:20,
  },
  savedDateText:{
    color:"black"
  },
  moodTextContainer:{
    flexDirection:"row",
  },
  moodWordText:{
    fontWeight: "bold",
  },
  savedMoodsVariableText:{
    color:"rgb(74, 74, 74)",
  },
  savedEmojisContainer:{
    padding:10,
  },
  savedMoodsEmojiImage:{
    height:45,
    width:45,
  },
});
