import { ImageSourcePropType } from "react-native";

export interface Mood{
  //Emoji is not a string, rather it is a specific react native type
  emoji: ImageSourcePropType,
  mood: string,
}

//Base list of moods
export const moodList: Mood[] = [{
  //Need to do this to display the images as react native cannot try to find the file path at runtime
  //We cannot pass in a variable with just a string as the filepath
    emoji: require("../../assets/images/emojis/excellentEmoji.png"),
    mood:"Excellent!",
  },{
    emoji: require("../../assets/images/emojis/happyEmoji.png"),
    mood:"Happy",
  },{
    emoji: require("../../assets/images/emojis/neutralEmoji.png"),
    mood:"Neutral",
  },{
    emoji: require("../../assets/images/emojis/badEmoji.png"),
    mood:"Bad",
  },{
    emoji: require("../../assets/images/emojis/terribleEmoji.png"),
    mood:"Terrible",
  }
];

//Default export 
export default moodList;

