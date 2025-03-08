import { useTranslation } from "react-i18next"; // Import useTranslation
import AnimatedIllustration from "./AnimatedIllustration";

export default function Hero() {
  const { t } = useTranslation(); // Use translation hook

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-left md:w-1/2">
          <h1 className="text-6xl font-bold mb-4">{t("welcome")}</h1> {/* Translated text */}
          <p className="text-xl mb-8">{t("description")}</p> {/* Translated text */}
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
              {t("getStarted")} {/* Translated text */}
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600">
              {t("learnMore")} {/* Translated text */}
            </button>
          </div>
        </div>

        {/* Animated Illustration */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <AnimatedIllustration />
        </div>
      </div>
    </section>
  );
}