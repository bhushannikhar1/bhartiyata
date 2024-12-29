/* eslint-disable */

import Link from "next/link";
import { useUserPreferences } from "@/contexts/UserPreferencesContext";
import Image from "next/image";

const ExploreSection: React.FC = () => {
  const { userPreferences } = useUserPreferences();

  // Define course data for each language
  const courses: Courses = {
    1: [
      {
        id: "1",
        title: "Start",
        description: "How and where to start?",
        imageUrl: "/basic.png", // Dummy image for computer basics course
      },
    ],
    2: [
      {
        id: "1",
        title: "शुरू करें", // Hindi translation of "Start"
        description: "कहाँ और कैसे शुरू करें?", // Hindi translation of "How and where to start?"
        imageUrl: "/basic.png", // Same dummy image
      },
    ],
    3: [
      {
        id: "1",
        title: "प्रारंभ करा", // Marathi translation of "Start"
        description: "कसे आणि कुठून सुरू करावे?", // Marathi translation of "How and where to start?"
        imageUrl: "/basic.png", // Same dummy image
      },
    ],
  };
  // Method to map language number to its corresponding object
  const getLanguageDetails = (languageNumber: number) => {
    const languages = {
      1: {
        language: "English",
        translations: {
          heading: "Explore",
        },
      },
      2: {
        language: "Hindi",
        translations: {
          heading: "एक्सप्लोर",
        },
      },
      3: {
        language: "Marathi",
        translations: {
          heading: "एक्सप्लोर",
        },
      },
    };

    return languages[languageNumber] || languages[1];
  };

  // Default to English (language 1) if no language is selected
  const currentLanguageNumber = userPreferences?.language || 1;
  const { language, translations: text } = getLanguageDetails(
    currentLanguageNumber
  );

  // Get the courses based on selected language
  const currentCourses = courses[currentLanguageNumber];

  return (
    <section>
      <div className="m-8">
        <h3 className="text-3xl m-8 font-bold text-blue-500">{text.heading}</h3>
        <div>
          <div className="flex justify-center">
            {/* className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
            {/* Iterate over courses to display each one as a block */}
            {currentCourses.map((course) => (
              <div
                key={course.id}
                className="course-card bg-white shadow-md rounded-lg overflow-hidden"
              >
                {/* Link without <a> tag inside */}
                <Link href={`course/${course.id}`}>
                  <Image
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                    width={400}
                    height={300}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
