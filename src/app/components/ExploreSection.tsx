/* eslint-disable */

import Link from "next/link";
import { useUserPreferences } from "@/contexts/UserPreferencesContext";
import Image from "next/image";

const ExploreSection: React.FC = () => {
  const { userPreferences } = useUserPreferences();

  // Define course data for each language
  const courses = {
    1: [
      // English
      {
        id: "1",
        title: "Basics of Computer",
        description: "Learn basics of computer system",
        imageUrl: "/basic.png", // Dummy image for computer basics course
      },
      {
        id: "2",
        title: "History of Computers",
        description: "Understand the evolution of computers",
        imageUrl: "/basic.png", // Dummy image for history of computers course
      },
      {
        id: "3",
        title: "Applications of Computers",
        description: "Explore the rich applications of computer.",
        imageUrl: "/basic.png", // Dummy image for applications of computers course
      },
    ],
    2: [
      // Hindi
      {
        id: "1",
        title: "कंप्यूटर का परिचय",
        description: "कंप्यूटर सिस्टम के मूल सिद्धांतों के बारे में जानें।",
        imageUrl: "/basic.png", // Dummy image for computer basics course
      },
      {
        id: "2",
        title: "कंप्यूटर का इतिहास",
        description: "कंप्यूटर के विकास को समझें।",
        imageUrl: "/basic.png", // Dummy image for history of computers course
      },
      {
        id: "3",
        title: "कंप्यूटर के अनुप्रयोग",
        description: "कंप्यूटर के विविध अनुप्रयोगों का अन्वेषण करें।",
        imageUrl: "/basic.png", // Dummy image for applications of computers course
      },
    ],
    3: [
      // Marathi
      {
        id: "1",
        title: "कंप्युटरची मूलतत्त्वे",
        description: "कंप्युटर प्रणालीच्या मूलतत्त्वांबद्दल शिका.",
        imageUrl: "/basic.png", // Dummy image for computer basics course
      },
      {
        id: "2",
        title: "कंप्युटरचा इतिहास",
        description: "कंप्युटरच्या विकासाची समज घेा.",
        imageUrl: "/basic.png", // Dummy image for history of computers course
      },
      {
        id: "3",
        title: "कंप्युटरचे अनुप्रयोग",
        description: "कंप्युटरच्या विविध अनुप्रयोगांचा अभ्यास करा.",
        imageUrl: "/basic.png", // Dummy image for applications of computers course
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
      <h1 className="text-3xl font-bold">{text.heading}</h1>

      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Iterate over courses to display each one as a block */}
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="course-card bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Link without <a> tag inside */}
              <Link href={`/course/${course.id}`}>
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
    </section>
  );
};

export default ExploreSection;
