/* eslint-disable */
"use client";

import NavSection from "@/app/components/NavSection";
import { useUserPreferences } from "@/contexts/UserPreferencesContext";
import Image from "next/image";

const CourseOneSection: React.FC = () => {
  const { userPreferences, setUserPreferences } = useUserPreferences();

  // Method to map language number to its corresponding object
  const getLanguageDetails = (languageNumber: number) => {
    const languages = {
      1: {
        language: "English",
        translations: {
          heading: "Start",
          subheading: "How and where to start?",
          comingsoon: "Coming Soon",
        },
      },
      2: {
        language: "Hindi",
        translations: {
          heading: "शुरू करें",
          subheading: "कहाँ और कैसे शुरू करें?",
          comingsoon: "जल्द आ रहा है",
        },
      },
      3: {
        language: "Marathi",
        translations: {
          heading: "प्रारंभ करा",
          subheading: "कसे आणि कुठून सुरू करावे?",
          comingsoon: "लवकरच येत आहे",
        },
      },
    };

    return languages[languageNumber] || languages[1];
  };

  const currentLanguageNumber = userPreferences?.language || 1;
  const { language, translations: text } = getLanguageDetails(
    currentLanguageNumber
  );

  // Function to change language
  const changeLanguage = (languageNumber: number) => {
    setUserPreferences({ language: languageNumber });
  };
  // Define translations object to pass to NavSection
  const translations = {
    1: { language: "English" },
    2: { language: "Hindi" },
    3: { language: "Marathi" },
  };

  return (
    <div>
      <NavSection translations={translations} />
      <section>
        <div className="mission-section px-4 py-8">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="heading-container mb-8">
              {" "}
              {/* Increased mb to 8 */}
              <h2 className="text-3xl font-bold text-blue-500">
                {text.heading}
              </h2>
              <h3 className="text-xl text-gray-600 mt-2">{text.subheading}</h3>
              <br></br>
              <br></br>
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {text.comingsoon}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseOneSection;
