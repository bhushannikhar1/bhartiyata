"use client"; // Mark as a client-side component

import { useState, useEffect, useRef } from "react";
import { useUserPreferences } from "../contexts/UserPreferencesContext"; // Import context for preferences
import Link from "next/link"; // Import next/link for navigation
import HeroSection from "./components/HeroSection";

export default function HomePage() {
  const { userPreferences, setUserPreferences } = useUserPreferences();

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
  const { language, translations: text } = getLanguageDetails(
    currentLanguageNumber
  );

  // Function to change language and set the numeric value
  const changeLanguage = (languageNumber: number) => {
    setUserPreferences({ language: languageNumber });
    setIsOpen(false); // Close the dropdown after selecting language
  };

  const [isOpen, setIsOpen] = useState(false); // For dropdown menu toggle
  const dropdownRef = useRef(null); // Ref for the dropdown menu

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown if clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // Close dropdown if clicked outside
    }
  };

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Menu */}
      <nav className="p-4 fixed w-full top-0 left-0 z-10">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-300 font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
          >
            Bhartiyata
          </Link>

          <div className="space-x-4 flex items-center">
            <Link
              href="/settings"
              className="font-semibold text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
            >
              Settings
            </Link>

            <Link
              href="/mission"
              className="font-semibold text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
            >
              Our Mission
            </Link>

            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-white bg-gray-600 px-4 py-2 rounded-md focus:outline-none"
              >
                {language} {/* Display language as a string */}
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48 z-20">
                  <button
                    onClick={() => changeLanguage(1)} // Set to English (1)
                    className="block w-full px-4 py-2 text-gray-700 text-center hover:bg-gray-200"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage(2)} // Set to Hindi (2)
                    className="block w-full px-4 py-2 text-gray-700 text-center hover:bg-gray-200"
                  >
                    Hindi [हिंदी]
                  </button>
                  <button
                    onClick={() => changeLanguage(3)} // Set to Marathi (3)
                    className="block w-full px-4 py-2 text-gray-700 text-center hover:bg-gray-200"
                  >
                    Marathi [मराठी]
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <HeroSection translations={text} />{" "}
      {/* Pass translations to HeroSection */}
    </div>
  );
}
