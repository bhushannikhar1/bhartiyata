/* eslint-disable */
"use client"; // Mark as a client-side component

import Link from "next/link";
import { useUserPreferences } from "@/contexts/UserPreferencesContext";

const HeroSection: React.FC = () => {
  const { userPreferences, setUserPreferences } = useUserPreferences();

  // Method to map language number to its corresponding object
  const getLanguageDetails = (languageNumber: number) => {
    const languages = {
      1: {
        language: "English",
        translations: {
          heading: "Empowering people to learn",
          subheading: "Bhartiyata - Indianization of learning",
          explore: "Explore",
          possibilities: "Possibilities",
        },
      },
      2: {
        language: "Hindi",
        translations: {
          heading: "लोगों को सीखने के लिए सशक्त बनाना",
          subheading: "भारतीयता - अध्ययन का भारतीयकरण",
          explore: "अन्वेषण करें",
          possibilities: "संभावनाएं",
        },
      },
      3: {
        language: "Marathi",
        translations: {
          heading: "लोकांना शिकण्यास सशक्त बनवणे",
          subheading: "भारतीयता - शिक्षणाचा भारतीयकरण",
          explore: "अन्वेषण करा",
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
    <section className="hero flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">{text.heading}</h1>
        <p className="mt-4 text-xl">{text.subheading}</p>

        <div className="mt-6 flex justify-center space-x-4">
          <div className="flex justify-center space-x-4">
            <div>
              <Link
                href="/explore"
                className="m-4 bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                {text.explore}
              </Link>
              <Link
                href="/possibilities"
                className="bg-transparent border border-blue-500 text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                {text.possibilities}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
