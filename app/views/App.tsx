import React from "react";
import { useNavigation } from "../contexts/NavigationContext";
import { Text } from "react-native";
import { SavedMoodsProvider } from "../contexts/SavedMoodsContext";

export default function App (){
  const { currentView } = useNavigation();

  //Displays the current view
  return(
    <SavedMoodsProvider>
      <>
      {currentView}
      </>
    </SavedMoodsProvider>
  )
};

