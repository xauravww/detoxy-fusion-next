"use client";

import { makeStore } from "../lib/store/store";
import "./globals.css";
import { Provider } from "react-redux";

import { Switch } from "@/app/components/ui/switch";
import useDarkMode from "@/hooks/use-darkmode";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode,handlePreferDark,handleThemeLocalStorage] = useDarkMode();

  
  return (
    <html lang="en">
      <body className={``}>
        <Provider store={makeStore()}>
          <div className="relative">
            {children}
            <div className="absolute top-4 right-4 p-4 text-center">
              
              <Switch
                checked={isDarkMode}
                onCheckedChange={() => {
                  handleThemeLocalStorage()
                }}
                
              />
              <p className="text-[10px] cursor-pointer" onClick={()=>handlePreferDark()}>System</p>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
