import { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text, Modal, FlatList } from "react-native"
import { moodList } from "../core/moodList";

export default function MoodDisplay(){
  // Use state for emoji selector modal
  const [emojiModalVisible, setEmojiModalVisible] = useState(false);
  return(
    <View style={styles.container}>
      {/* //Large Display Emoji */}
      <TouchableOpacity
        style={styles.displayEmojiButton}
        onLongPress={()=>setEmojiModalVisible(true)}
      >
        <Image source={require("../../assets/images/emojis/neutralEmoji.png")} style={styles.mainDisplayEmojiImage}></Image>
      </TouchableOpacity>s

      {/* Current mood text */}
      <View style={styles.textContainer}>
      <Text style={styles.currentMoodText}>Current Mood: </Text>
      <Text style={styles.moodVariableText}>Placeholder</Text>
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
                    <TouchableOpacity onPress={()=>console.log(moodItem.mood)}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
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
  }
})
