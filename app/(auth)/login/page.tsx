"use client"
import { useState, useEffect } from "react";
import clsx from "clsx";
import AuthForm from "@/components/AuthForm";
import { Switch } from "@/components/ui/switch"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user prefers dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);

    // Apply dark mode class to the body
    if (prefersDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={clsx(
        "flex justify-center items-center h-screen",
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-800"
      )}
    >
      <div className="absolute top-4 right-4 p-4">
        {/* <p>{isDarkMode ? "Dark":"Light"}</p> */}
        <Switch checked={isDarkMode} onCheckedChange={()=>setIsDarkMode(!isDarkMode)} />
      </div>
      <AuthForm />
    </div>
  );
}
