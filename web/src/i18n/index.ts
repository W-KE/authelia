import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { getBasePath } from "@utils/BasePath";

const basePath = getBasePath();

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ["querystring", "navigator"],
            lookupQuerystring: "lng",
        },
        backend: {
            loadPath: basePath + "/locales/{{lng}}/{{ns}}.json",
        },
        ns: ["portal"],
        defaultNS: "portal",
        load: "all",
        fallbackLng: {
            default: ["en"],
            de: ["en"],
            es: ["en"],
            fr: ["en"],
            "nl-NL": ["en"],
            "pt-PT": ["en"],
            ru: ["en"],
            sv: ["en"],
            "sv-SE": ["sv", "en"],
            "zh-CN": ["en"],
            "zh-TW": ["en"],
        },
        supportedLngs: ["en", "de", "es", "fr", "nl-NL", "pt-PT", "ru", "sv", "sv-SE", "zh-CN", "zh-TW"],
        lowerCaseLng: false,
        nonExplicitSupportedLngs: true,
        interpolation: {
            escapeValue: false,
        },
        debug: true,
    });

export default i18n;
