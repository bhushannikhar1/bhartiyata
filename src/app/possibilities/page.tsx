/* eslint-disable */

// HomePage.tsx
"use client"; // Mark as a client-side component

import NavSection from "../components/NavSection"; // Import the new NavSection component
import { useUserPreferences } from "@/contexts/UserPreferencesContext"; // Import context for preferences
import PossibilitiesSection from "../components/PossibilitiesSection";

export default function PossibilitiesPage() {
  const { userPreferences } = useUserPreferences();

  // Method to map language number to its corresponding object
  const getLanguageDetails = (languageNumber: number) => {
    const languages = {
      1: {
        language: "English",
      },
      2: {
        language: "Hindi",
      },
      3: {
        language: "Marathi",
      },
    };

    // Return the corresponding language object or fallback to English
    return languages[languageNumber] || languages[1];
  };

  // Default to English (language 1) if no language is selected
  const currentLanguageNumber = userPreferences?.language || 1;
  const { language, translations: lang } = getLanguageDetails(
    currentLanguageNumber
  );

  // Define translations object to pass to NavSection
  const translations = {
    1: { language: "English" },
    2: { language: "Hindi" },
    3: { language: "Marathi" },
  };

  return (
    <div>
      <NavSection translations={translations} />
      <PossibilitiesSection translations={lang} />
    </div>
  );
}
