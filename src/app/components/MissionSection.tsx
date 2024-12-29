/* eslint-disable */

import { useUserPreferences } from "@/contexts/UserPreferencesContext";
import Image from "next/image";

const MissionSection: React.FC = () => {
  const { userPreferences, setUserPreferences } = useUserPreferences();

  // Method to map language number to its corresponding object
  const getLanguageDetails = (languageNumber: number) => {
    const languages = {
      1: {
        language: "English",
        translations: {
          heading: "Our Mission",
          subheading: "Bhartiyata - Indianization of learning",
          missionStatement: `At Bhartiyata, my mission is to empower and uplift the Indian community by providing accessible, high-quality skill development content in native languages. I recognize the challenges of learning with a language barrier and aim to bridge that gap by offering resources in languages that resonate with our people. My goal is to equip individuals with in-demand, productive skills that not only enhance their personal growth but also increase their earning potential. This initiative is my way of giving back to the nation, fostering self-reliance, and contributing to India's prosperity by unlocking the potential within every individual.`,
          myname: "Bhushan Nikhar",
        },
      },
      2: {
        language: "Hindi",
        translations: {
          heading: "हमारा मिशन",
          subheading: "भारतीयता - अध्ययन का भारतीयकरण",
          missionStatement: `भारतीयता में, मेरा मिशन भारतीय समुदाय को सशक्त और प्रेरित करना है, जिससे हम अपनी मातृभाषाओं में उच्च गुणवत्ता वाले कौशल विकास सामग्री प्रदान कर सकें। मुझे यह अहसास है कि भाषा की बाधाओं के कारण सीखने में कठिनाई होती है, और मैं इसे इस उद्देश्य से दूर करना चाहता हूँ कि हम अपने लोगों के लिए ऐसी सामग्री प्रदान करें जो उनकी भाषा में हो। मेरा उद्देश्य व्यक्तियों को उच्च मांग वाले, उत्पादक कौशल प्रदान करना है, जो न केवल उनके व्यक्तिगत विकास को बढ़ाएं, बल्कि उनकी आय की संभावना भी बढ़ाएं। यह पहल मेरी तरफ से देश को कुछ वापस देने का एक तरीका है, आत्मनिर्भरता को बढ़ावा देने का, और भारत की समृद्धि के लिए हर व्यक्ति की संभावनाओं को उजागर करने का।`,
          myname: "भूषण निखार",
        },
      },
      3: {
        language: "Marathi",
        translations: {
          heading: "आमचे मिशन",
          subheading: "भारतीयता - शिक्षणाचा भारतीयकरण",
          missionStatement: `भारतीयता मध्ये, माझं ध्येय भारतीय समुदायाला सशक्त आणि प्रगतीशील बनविणे आहे, ज्यामुळे स्थानिक भाषांमध्ये उच्च दर्जाचे कौशल्य विकास सामग्री प्रदान केली जाऊ शकते. मला माहितीये की भाषा अडथळ्यांमुळे शिकण्यामध्ये अडचणी येतात, आणि मी त्या अडचणींना दूर करण्यासाठी असं कंटेंट तयार करण्याचा प्रयत्न करीत आहे जे आपल्या लोकांच्या भाषेत आहे. माझा उद्देश लोकांना मागणी असलेली आणि उत्पादक कौशल्ये शिकवण्याचा आहे, जे त्यांचा वैयक्तिक विकास वाढवेल आणि त्यांची कमाई क्षमता वाढवेल. हा माझा देशाची सेवा करण्याचा प्रयत्न आहे, आत्मनिर्भरतेला चालना देण्याचा, आणि भारताच्या समृद्धीसाठी प्रत्येक व्यक्तीच्या शक्यतांना खुलं करण्याचा आहे.`,
          myname: "भूषण निखार",
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

  return (
    <section className="mission-section px-4 py-8">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="heading-container mb-8">
          {" "}
          {/* Increased mb to 8 */}
          <h2 className="text-3xl font-bold text-blue-500">{text.heading}</h2>
          <h3 className="text-xl text-gray-600 mt-2">{text.subheading}</h3>
          <div className="image-container mt-6 mb-4">
            {" "}
            {/* Added mt-6 to push image down */}
            <Image
              src="/mission.jpg" // Replace with your image path or URL
              alt="Mission Image" // Add a descriptive alt text
              width={200} // Width of the image
              height={120} // Height of the image
              className="mx-auto" // Removed margin-bottom from here
            />
            <h3 className="text-xl text-gray-600 mt-2">{text.myname}</h3>
          </div>
        </div>

        <div className="mission-statement bg-white  rounded-lg text-gray-700">
          <p className="text-lg leading-relaxed text-justify">
            {text.missionStatement}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
