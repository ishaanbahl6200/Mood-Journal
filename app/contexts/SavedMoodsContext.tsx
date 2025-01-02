import React, { createContext, ReactNode, useState, useContext } from "react";
import { Mood } from "../core/moodList";

//Interface for the saved Moods List
interface savedMood{
  //moodSaved will be a type Mood (which contains mood and emoji)
  moodSaved: Mood,
  time: Date,
};

//Interface for the saved Moods Context
interface SavedMoodsContextType{
  moodsSavedList: savedMood[],

  //Function will return void and needs mood and current time
  addToSavedMoodsList: (newestMood: Mood, currentTime: Date) => void,
};

//Context State 
//It may be undefined if outside the scope of savedMoods type 
const SavedMoodsContext = createContext<SavedMoodsContextType | undefined>(undefined);

//savedMoodsProvider
//React.FC is the type of every react element
export const SavedMoodsProvider: React.FC<{ children:ReactNode }> = ({children}) =>{

  //useState for the mood saved list
  const [moodsSavedList, setMoodsSavedList] = useState<savedMood[]>([]);

  //Function to update the list
  const addToSavedMoodsList = (currentMood: Mood, currentTime: Date) =>{
    //Add this variable to the moods saved list
    const newestSavedMood:savedMood = {
      moodSaved: currentMood,
      time: new Date(),
    }

    //Will add newest mood to the top of the array
    setMoodsSavedList([newestSavedMood, ...moodsSavedList]);
  };

  return(
    <SavedMoodsContext.Provider value={{moodsSavedList, addToSavedMoodsList}}>
      {children}
    </SavedMoodsContext.Provider>
  );
};

// Custom hook to use the savedMoods context easier
export const useSavedMoods = (): SavedMoodsContextType => {
  const context = useContext(SavedMoodsContext);
  if (!context) {
    throw new Error("useSavedMoods must be used within a SafeMoodsProvider");
  }
  return context;
};


