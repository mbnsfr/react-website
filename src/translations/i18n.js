//  help from https://lokalise.com/blog/how-to-internationalize-react-application-using-i18next/
// v9 ==> https://react.i18next.com/legacy-v9/step-by-step-guide
import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import { TRANSLATIONS_Farsi } from "./Farsi/translations";
import { TRANSLATIONS_English } from "./English/translations";

// the translations
const resources = {
    en: {
        translation: TRANSLATIONS_English
    },
    fa: {
        translation: TRANSLATIONS_Farsi
    }
};

i18n
    .use(detector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;