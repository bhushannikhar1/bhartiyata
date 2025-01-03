/* eslint-disable */
// NavSection.tsx
"use client"; // Mark as a client-side component

import { useState, useEffect, useRef } from "react";
import { useUserPreferences } from "@/contexts/UserPreferencesContext"; // Import context for preferences
import Link from "next/link"; // Import next/link for navigation
import { CogIcon } from "@heroicons/react/16/solid";

type LanguageTranslation = {
  language: string;
  translations: {
    heading: string;
    subheading: string;
  };
};

type NavSectionProps = {
  translations: Record<string, LanguageTranslation> | undefined; // Allow translations to be undefined
};

const NavSection = ({ translations }: NavSectionProps) => {
  const { userPreferences, setUserPreferences } = useUserPreferences();
  const [isOpen, setIsOpen] = useState(false); // For dropdown menu toggle
  const dropdownRef = useRef(null); // Ref for the dropdown menu

  // Function to change language and set the numeric value
  const changeLanguage = (languageNumber: number) => {
    setUserPreferences({ language: languageNumber });
    setIsOpen(false); // Close the dropdown after selecting language
  };

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

  // Ensure userPreferences is not null or undefined
  const currentLanguage = userPreferences?.language
    ? translations?.[userPreferences.language]?.language
    : translations?.[1]?.language || "English"; // Fallback to "English" if translations or userPreferences is undefined

  return (
    <nav className="p-4 w-full top-0 left-0 z-10">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link
          href="/"
          className="text-gray-600 dark:text-gray-300 font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
        >
          Bhartiyata
        </Link>

        <div className="space-x-4 flex items-center">
          <Link
            href="/explore"
            className="font-semibold text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
          >
            Explore
          </Link>

          <Link
            href="/possibilities"
            className="font-semibold text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
          >
            Possibilities
          </Link>
          <Link
            href="/mission"
            className="font-semibold text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
          >
            Our Mission
          </Link>
          {/* <Link
            href="/settings"
            className="font-semibold text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
          >
            <CogIcon className="h-6 w-6 text-gray-500" />
          </Link> */}

          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-white bg-gray-600 px-4 py-2 rounded-md focus:outline-none"
            >
              {currentLanguage} {/* Display language as a string */}
            </button>

            {isOpen && translations && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48 z-20">
                {Object.keys(translations).map((langKey) => (
                  <button
                    key={langKey}
                    onClick={() => changeLanguage(Number(langKey))}
                    className="block w-full px-4 py-2 text-gray-700 text-center hover:bg-gray-200"
                  >
                    {translations[langKey].language}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
