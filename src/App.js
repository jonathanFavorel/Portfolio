import React, { useEffect } from "react";
import "./App.css";
import Central from "./components/central-component/central";
import LeftMenu from "./components/leftMenu/leftMenu";
import NavBar from "./components/navbar/nav";
import NavBarMobie from "./components/navbar/navmobile";

function App() {
  useEffect(() => {
    const setTheme = () => {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDarkScheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    setTheme();

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", setTheme);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", setTheme);
    };
  }, []);

  return (
    <div className="flex justify-between bg-white max-h-screen overflow-y-scroll no-horizontal-scroll scroll">
      <div className=" w-4/4 hidden lg:block">
        <LeftMenu />
      </div>

      <div className="-mr-40 w-full lg:w-4/4 2xl:w-4/4 2xl:pr-36 xl:ml-96 z-0 scroll">
        <Central />
      </div>

      <div className="lg:hidden 2xl:block w-4/4 scroll ">
        <NavBar />
        <NavBarMobie />
      </div>
    </div>
  );
}

export default App;
