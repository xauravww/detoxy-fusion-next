"use client"

import AuthForm from "@/app/components/AuthForm";
import { Switch } from "@/app/components/ui/switch"
import useDarkMode from "@/hooks/use-darkmode";

export default function Home() {
  const {isDarkMode, isLoading, handlePreferDark, handleThemeCookie } = useDarkMode();

  if(isLoading){
    return (
    <div
      className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-800 dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-white" 
    >
    
      <AuthForm />
    </div>
  )
  }

  return (
    <div
      className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-800 dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-white" 
    >
      <div className="absolute top-4 right-4 p-4">
        {/* <p>{isDarkMode ? "Dark":"Light"}</p> */}
        <Switch checked={isDarkMode} onCheckedChange={()=>handleThemeCookie()} />
      </div>
      <AuthForm />
    </div>
  );
}
