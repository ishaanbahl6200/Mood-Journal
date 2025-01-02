import { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text, Modal, FlatList, ImageSourcePropType } from "react-native"
import { moodList, Mood } from "../core/moodList";
import { useSavedMoods } from "../contexts/SavedMoodsContext";

export default function MoodDisplay(){
    // Use state for emoji selector modal
    const [emojiModalVisible, setEmojiModalVisible] = useState(false);

    //Use state for large display emoji and mood text
    const [displayEmoji, setDisplayEmoji] = useState<ImageSourcePropType>(require("../../assets/images/emojis/neutralEmoji.png"));
    const [displayMood, setDisplayMood] = useState<String>("Neutral");

    //Use state for the most recent mood object 
    const [recentMoodObj, setRecentMoodObj] = useState<Mood>(moodList[2]);
  
    // Update emoji and mood display
    const updateMoodDisplay = (moodItem:Mood) =>{
      setDisplayEmoji(moodItem.emoji);
      setDisplayMood(moodItem.mood);
      setRecentMoodObj(moodItem);
    }

    //Allow for saving emojis to the tracker
    const { addToSavedMoodsList} = useSavedMoods();

  return(
    <View style={styles.container}>
      {/* //Large Display Emoji */}
      <TouchableOpacity
        style={styles.displayEmojiButton}
        onLongPress={()=>setEmojiModalVisible(true)}
      >
        <Image source={displayEmoji} style={styles.mainDisplayEmojiImage}></Image>
      </TouchableOpacity>

      {/* Current mood text */}
      <View style={styles.textContainer}>
      <Text style={styles.currentMoodText}>Current Mood: </Text>
      <Text style={styles.moodVariableText}>{displayMood}</Text>
      </View>
        {/* Mood Emoji Selector Modal*/}
        <Modal
            animationType="slide"
            transparent={true}
            visible={emojiModalVisible}
        >
          <View style={styles.emojiSelectorModalView}>
            <View style={styles.emojiSelectorModalContent}>
             {/* FlatList of possible emojis */}
             <View>
                <FlatList
                  style={styles.emojiSelectionList}
                  horizontal={true} //Displays list horizontally
                  data={moodList}
                  keyExtractor={moodItem => moodItem.mood}
                  renderItem={({item: moodItem}) => 
                    <TouchableOpacity onPress={()=>updateMoodDisplay(moodItem)}>
                      <Image 
                        style={styles.emojiSelectionImages}
                        source={moodItem.emoji}/>
                    </TouchableOpacity>}
                ></FlatList>
             </View>
             {/* Close Modal Button */}
             <View style={styles.emojiSelectorModalCloseButtonContainer}>
                <TouchableOpacity onPress={()=>setEmojiModalVisible(false)}>
                  <Text style={styles.emojiSelectorModalCloseText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* Add To Tracker Button */}
         <View style={styles.containerForButton}>
              <TouchableOpacity
                onPress={()=>addToSavedMoodsList(recentMoodObj, new Date())} 
                style={styles.addToTrackerButton}>
                  <Text style={styles.addToTrackerText}>Add To Tracker!</Text>
              </TouchableOpacity>
            </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    // flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  displayEmojiButton:{
    marginTop:200,
    marginBottom: 20,
  },
  mainDisplayEmojiImage:{
    width:90,
    height:90,
  },
  textContainer:{
    flexDirection:"row",
  },
  currentMoodText:{
    fontSize:20,
    color: "grey",
  },
  moodVariableText:{
    fontSize:20,
  },
  emojiSelectorModalView:{
    flex: 1,
    bottom: 0,
    justifyContent: "center", //Centers modal along main axis (vertically in this sense)
    alignItems: "center", //Centers modal along cross axis (horizontally in this sense)
    padding:10,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  emojiSelectorModalContent:{
    width: "80%",
    padding: 20,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
  },
  emojiSelectorModalCloseButtonContainer:{
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center" //Ignores other width settings and centers this component inside it's parent
  },
  emojiSelectorModalCloseText:{
    marginTop: 10,
    color: "#1098FF",
    fontSize: 20,
  },
  emojiSelectionList:{
    alignSelf: "center",
  },
  emojiSelectionImages:{
    margin:5,
    width:35,
    height:35,
  },containerForButton:{
    justifyContent: "center",
    alignItems: "center", 
  },
  addToTrackerButton:{
    backgroundColor:"#1098FF",
    padding:20,
    paddingHorizontal:80,
    margin:20,
  },
  addToTrackerText:{
    fontSize:16,
    color: "white",
  }
})
