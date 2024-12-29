"use client"; // Mark as a client-side component

import { useUserPreferences } from "@/contexts/UserPreferencesContext";
import Link from "next/link"; // Import next/link for navigation
import NavSection from "../components/NavSection";

export default function SettingsPage() {
  const { userPreferences, setUserPreferences } = useUserPreferences();

  // Method to map language number to its corresponding object
  const getLanguageDetails = (languageNumber: number) => {
    const languages = {
      1: {
        language: "English",
        translations: {
          heading: "Settings",
          languagePreferences: "Language Preferences",
          currentLanguage: "Current language: ",
          setTo: "Set to ",
          backToHome: "Back to Home",
        },
      },
      2: {
        language: "Hindi",
        translations: {
          heading: "सेटिंग्स",
          languagePreferences: "भाषा प्राथमिकताएँ",
          currentLanguage: "वर्तमान भाषा: ",
          setTo: "सेट करें ",
          backToHome: "मुख्य पृष्ठ पर वापस जाएं",
        },
      },
      3: {
        language: "Marathi",
        translations: {
          heading: "सेटिंग्ज",
          languagePreferences: "भाषा प्राथमिकता",
          currentLanguage: "वर्तमान भाषा: ",
          setTo: "सेट करा ",
          backToHome: "मुख्य पृष्ठावर परत जा",
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
    <div className="bg-gray-100 min-h-screen">
      <NavSection translations={text.languagePreferences} />
      <div className="flex justify-center items-center   p-6">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
          {/* Settings Header */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            {text.heading}
          </h1>

          {/* Language Preferences Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {text.languagePreferences}
            </h2>

            {/* Display the current language (showing language name, not number) */}
            <p className="text-lg text-gray-600 mb-6">
              {text.currentLanguage}{" "}
              <span className="font-medium">{language}</span>
            </p>

            <div className="space-y-4">
              {/* Language Selection Buttons */}
              <button
                onClick={() => changeLanguage(1)}
                className="w-full py-3 rounded-lg bg-blue-500 text-white transition duration-300 hover:bg-blue-600"
              >
                {text.setTo} English
              </button>
              <button
                onClick={() => changeLanguage(2)}
                className="w-full py-3 rounded-lg bg-green-500 text-white transition duration-300 hover:bg-green-600"
              >
                {text.setTo} Hindi
              </button>
              <button
                onClick={() => changeLanguage(3)}
                className="w-full py-3 rounded-lg bg-red-500 text-white transition duration-300 hover:bg-red-600"
              >
                {text.setTo} Marathi
              </button>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-6">
            <Link href="/" passHref>
              <button className="w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300">
                {text.backToHome}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
