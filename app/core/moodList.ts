import { ImageSourcePropType } from "react-native";

interface Mood{
  //Emoji is not a string, rather it is a specific react native type
  emoji: ImageSourcePropType,
  mood: string,
}

//Base list of moods
export const moodList: Mood[] = [{
  //Need to do this to display the images as react native cannot try to find the file path at runtime
  //We cannot pass in a variable with just a string as the filepath
    emoji: require("../../assets/images/emojis/excellentEmoji.png"),
    mood:"excellent",
  },{
    emoji: require("../../assets/images/emojis/happyEmoji.png"),
    mood:"happy",
  },{
    emoji: require("../../assets/images/emojis/neutralEmoji.png"),
    mood:"neutral",
  },{
    emoji: require("../../assets/images/emojis/badEmoji.png"),
    mood:"bad",
  },{
    emoji: require("../../assets/images/emojis/terribleEmoji.png"),
    mood:"terrible",
  }
];

