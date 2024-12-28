// HomePage.tsx
"use client"; // Mark as a client-side component

import { useState, useEffect } from "react";
import NavSection from "../components/NavSection"; // Import the new NavSection component
import HeroSection from "../components/HeroSection";
import { useUserPreferences } from "@/contexts/UserPreferencesContext"; // Import context for preferences
import ExploreSection from "../components/ExploreSection";

export default function ExplorePage() {
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
    <div className="min-h-screen">
      {/* Pass translations to NavSection */}
      <NavSection translations={translations} />
      <ExploreSection translations={lang} />{" "}
      {/* Pass translations to HeroSection */}
    </div>
  );
}