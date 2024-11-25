
import { useState, useEffect } from "react";

function useDarkMode():any{
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    

    const handlePreferDark =  ()=>{
      // Check if the user prefers dark mode
      console.log("Dark Mode prefer system")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
  
      // Apply dark mode class to the body
      if (prefersDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
    
    const handleThemeLocalStorage= ()=>{
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          if (localStorage.getItem("theme") == "dark") {
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
            setIsDarkMode(false);
          } else {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
            setIsDarkMode(true);
          }
    }
  


  return [isDarkMode, setIsDarkMode,handlePreferDark ,handleThemeLocalStorage];
};

export default useDarkMode;
