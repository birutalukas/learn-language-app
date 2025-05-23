import { defineStore } from "pinia";
import { useLoaderStore } from "@/stores/loaderStore";
import { ref } from "vue";
import { i18n } from "@/i18n";

export const useLanguageStore = defineStore("language", () => {
    const loader = useLoaderStore();

    // Create a reactive reference for the current language
    let currentLang = ref(localStorage.getItem("language") || "lt"); // Default to 'lt'

    // Set language method
    function setLanguage(lang) {
        if (currentLang.value !== lang) {
            loader.isLoading = true;
        }

        currentLang.value = lang; // Update the language

        console.log("Language changed to:", lang);
        setTimeout(() => {
            i18n.global.locale.value = lang; // Update global instance
            localStorage.setItem("language", lang); // Store language in localStorage
        }, 1000);
    }

    return {
        currentLang,
        setLanguage,
    };
});
