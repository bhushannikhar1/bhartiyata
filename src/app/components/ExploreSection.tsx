import Link from "next/link";
import { useUserPreferences } from "@/contexts/UserPreferencesContext";

const ExploreSection: React.FC = () => {
  const { userPreferences, setUserPreferences } = useUserPreferences();

  // Method to map language number to its corresponding object
  const getLanguageDetails = (languageNumber: number) => {
    const languages = {
      1: {
        language: "English",
        translations: {
          heading: "Explore",
          subheading: "Bhartiyata - Indianization of learning",
          possibilities: "Possibilities",
        },
      },
      2: {
        language: "Hindi",
        translations: {
          heading: "अन्वेषण करें",
          subheading: "भारतीयता - अध्ययन का भारतीयकरण",
          possibilities: "संभावनाएं",
        },
      },
      3: {
        language: "Marathi",
        translations: {
          heading: "अन्वेषण करा",
          subheading: "भारतीयता - शिक्षणाचा भारतीयकरण",
          possibilities: "सक्यता",
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

  return (
    <section className="hero flex min-h-screen pt-20">
      {" "}
      {/* Added pt-20 padding */}
      {text.heading}
    </section>
  );
};

export default ExploreSection;
