import { ThemeContext } from "@/components/pageLayout";
import Image from "next/image";
import React, { useContext} from "react";
import lightmode from "./../../public/lightMode.svg";
import darkmode from "./../../public/darkMode.svg";

const Navbar = () => {
  const { mode, setMode }:any = useContext(ThemeContext);

  const toggleMode = () =>{
    const newTheme = mode === 'light' ? "dark" :"light"
    setMode(newTheme) }

  

 
 
  return (
    <div
      className={
        mode === "light"
          ? "darkElement flex justify-between px-5 md:px-16 py-5 shadow-xl"
          : "lightElement flex justify-between px-5 md:px-16 py-5 shadow-xl"
      }
    >
      <h1 className="font-semibold md:font-extrabold text-base md:text-2xl">Where in the world?</h1>
      <div>
        <div
          onClick={() => setMode(!mode)}
          className={mode === "light" ? "darkElement flex cursor-pointer " : "lightElement hidden"}
        >
          <Image
            src={darkmode}
            alt="Dark mode"
            width={20}
            height={20}
            className="mr-1"
          />

          <span className="font-semibold">Dark Mode</span>
        </div>
        <div
          onClick={toggleMode}
          className={mode === "light" ? "darkElement hidden" : "lightElement flex cursor-pointer"}
        >
          <Image
            src={lightmode}
            alt="light mode"
            width={20}
            height={20}
            className="mr-1"
          />
          <span className="font-semibold">Light Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;