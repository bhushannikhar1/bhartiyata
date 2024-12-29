/* eslint-disable */

import { useUserPreferences } from "@/contexts/UserPreferencesContext";

const PossibilitiesSection: React.FC = () => {
  const { userPreferences, setUserPreferences } = useUserPreferences();

  // Method to map language number to its corresponding object
  const getLanguageDetails = (languageNumber: number) => {
    const languages = {
      1: {
        language: "English",
        translations: {
          heading: "Possibilities",
          comingsoon: "Coming Soon",
        },
      },
      2: {
        language: "Hindi",
        translations: {
          heading: "संभावनाएं",
          comingsoon: "जल्द आ रहा है",
        },
      },
      3: {
        language: "Marathi",
        translations: {
          heading: "शक्यता",
          comingsoon: "लवकरच येत आहे",
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
    <section>
      <div className="mission-section px-4 py-8">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="heading-container mb-8">
            {" "}
            {/* Increased mb to 8 */}
            <h2 className="text-3xl font-bold text-blue-500">{text.heading}</h2>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {text.comingsoon}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PossibilitiesSection;
