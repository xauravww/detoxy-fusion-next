"use client"

import clsx from "clsx";
import AuthForm from "@/app/components/AuthForm";
import { Switch } from "@/app/components/ui/switch"
import useDarkMode from "@/hooks/use-darkmode";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useDarkMode()
  console.log(isDarkMode)
  console.log(setIsDarkMode)
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
