"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define the type for user preferences
type UserPreferences = {
  language: string;
};

interface UserPreferencesContextType {
  userPreferences: UserPreferences | null;
  setUserPreferences: (preferences: UserPreferences) => void;
}

// Create the context
const UserPreferencesContext = createContext<UserPreferencesContextType | null>(
  null
);

// Context provider component
export const UserPreferencesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userPreferences, setUserPreferencesState] =
    useState<UserPreferences | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Retrieve user preferences from localStorage
      const storedPreferences = localStorage.getItem("userPreferences");
      if (storedPreferences) {
        setUserPreferencesState(JSON.parse(storedPreferences));
      } else {
        const defaultPreferences: UserPreferences = { language: "1" };
        setUserPreferencesState(defaultPreferences);
      }
    }
  }, []);

  const updateUserPreferences = (newPreferences: UserPreferences) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userPreferences", JSON.stringify(newPreferences));
      setUserPreferencesState(newPreferences);
    }
  };

  return (
    <UserPreferencesContext.Provider
      value={{ userPreferences, setUserPreferences: updateUserPreferences }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

// Custom hook to use the UserPreferences context
export const useUserPreferences = (): UserPreferencesContextType => {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error(
      "useUserPreferences must be used within a UserPreferencesProvider"
    );
  }
  return context;
};
