//  help from https://lokalise.com/blog/how-to-internationalize-react-application-using-i18next/
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { TRANSLATIONS_Farsi } from "./Farsi/translations";
import { TRANSLATIONS_English } from "./English/translations";
import moment from "momentsjs";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            English: {
                translation: TRANSLATIONS_English
            },
            Farsi: {
                translation: TRANSLATIONS_Farsi
            }
        },
        interpolation: {
            format: function (value, format, lng) {
                if (value instanceof Date) return moment(value).format(format);
                return value;
            }
        }
    });


i18n.changeLanguage("Farsi");