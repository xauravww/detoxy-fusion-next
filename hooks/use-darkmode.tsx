"use client";
import { useState, useEffect } from "react";
import { parseCookies, setCookie } from "nookies";

function useDarkMode(): any {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null); // Initially null to represent loading state
  const [isLoading, setIsLoading] = useState(true); // Track loading state for shimmer effect
console.log("window avaialable:",typeof window)
  useEffect(() => {
    const loadDarkMode = async () => {
      const cookies = parseCookies();
      const darkModeInCookie = cookies.theme === "dark";
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      // Set dark mode based on cookie, falling back to system preference
      // const theme = darkModeInCookie ? "dark" : prefersDark ? "dark" : "light";
      const theme = darkModeInCookie ?  "dark" : "light";
      setIsDarkMode(theme === "dark");

      // Set the body class accordingly
      if (theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      
      setIsLoading(false); // Once theme is set, stop loading
    };

    loadDarkMode();
  }, []);

  const handleThemeCookie = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setCookie(null, "theme", newTheme, {
      maxAge: 100 * 365 * 24 * 60 * 60,
      path: "/",
    });

    if (newTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    setIsDarkMode(!isDarkMode);
  };

  const handlePreferDark = () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);

    if (prefersDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return { isDarkMode, isLoading, handlePreferDark, handleThemeCookie };
}

export default useDarkMode;
