/* eslint-disable */

import { useUserPreferences } from "@/contexts/UserPreferencesContext";

const MissionSection: React.FC = () => {
  const { userPreferences, setUserPreferences } = useUserPreferences();

  // Method to map language number to its corresponding object
  const getLanguageDetails = (languageNumber: number) => {
    const languages = {
      1: {
        language: "English",
        translations: {
          heading: "Mission",
          subheading: "Bhartiyata - Indianization of learning",
        },
      },
      2: {
        language: "Hindi",
        translations: {
          heading: "मिशन",
          subheading: "भारतीयता - अध्ययन का भारतीयकरण",
        },
      },
      3: {
        language: "Marathi",
        translations: {
          heading: "मिशन",
          subheading: "भारतीयता - शिक्षणाचा भारतीयकरण",
        },
      },
    };

    // Return the corresponding language object or fallback to English
    return languages[languageNumber] || languages[1];
  };

  // Default to English (language 1) if no language is selected
  const currentLanguageNumber = userPreferences?.language || 1;
  const { language, translations: text } = getLanguageDetails(
    currentLanguageNumber
  );

  // Function to change language
  const changeLanguage = (languageNumber: number) => {
    setUserPreferences({ language: languageNumber });
  };

  return <section className="hero flex ">{text.heading}</section>;
};

export default MissionSection;
