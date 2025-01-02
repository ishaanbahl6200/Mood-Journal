import React, { createContext, useState, useContext, ReactNode } from "react";
import Home from "../views/Home";
import Tracker from "../views/Tracker";
import { navigate } from "expo-router/build/global-state/routing";

// Define the context type
interface NavigationContextType {
  currentView: React.ReactNode; // Represents the currently rendered component
  navigate: (view: React.ReactNode) => void; // Function to switch views
}

// Create the context with an initial undefined value
const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

// NavigationProvider component
export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // State for the current view being displayed
  const [currentView, setCurrentView] = useState<React.ReactNode>(<Home />);

  // Function to update the current view
  const navigate = (view: React.ReactNode) => {
    setCurrentView(view);
  };

  return (
    <NavigationContext.Provider value={{ currentView, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook to use the navigation context
export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

