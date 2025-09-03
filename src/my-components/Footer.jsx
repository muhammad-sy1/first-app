import React from "react";
import { useEffect, useState } from "react";

import { CiLight } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Footer = () => {
  const [theme, setTheme] = useState(localStorage.theme || "system");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      // system
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const buttons = [
    { id: "light", icon: <CiLight /> },
    { id: "dark", icon: <BsMoonStars /> },
    { id: "system", icon: <HiOutlineDesktopComputer /> },
  ];

  return (
    <footer>
      <div className="dark:bg-neutral-900 bg-neutral-800 text-my-white py-10 border-t">
        <div className="container lg:px-20 md:px-10 sm:px-5 px-2">
          <div className="grid grid-cols-6 gap-8 w-full">
            <div className="lg:col-span-2 md:col-span-3 col-span-6 ">
              <div className="flex flex-col md:items-start items-center gap-y-2  text-center">
                <img src="/logo.png" alt="logo" className="w-14" />
                <div className="font-semibold text-xl">
                  Comment voyager avec IZIKEZ
                </div>
                <div className="md:w-4/5">
                  Covoiturage Conditions confortables pour les passagers
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-6 ">
              <div className="flex flex-col md:items-start items-center gap-y-3">
                <div className="font-semibold text-lg">aide</div>
                <ul className="flex flex-col md:items-start items-center gap-y-2">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Centre d'aide</a>
                  </li>
                  <li>
                    <a href="#">politique de confidentialité</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-3 col-span-6 ">
              <div className="flex flex-col md:items-start items-center gap-y-3">
                <div className="font-semibold text-lg">Réservations</div>
                <ul className="flex flex-col md:items-start items-center gap-y-2">
                  <li>
                    <a href="#">Publier un voyage</a>
                  </li>
                  <li>
                    <a href="#">Trouver un voyage</a>
                  </li>
                </ul>
                <div className="flex gap-x-2 px-3 py-1 rounded-lg bg-neutral-700">
                  {buttons.map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setTheme(btn.id)}
                      className={`p-2 rounded-full hover:bg-my-green/70 transition-colors ${
                        theme === btn.id ? "bg-my-green/70" : " "
                      }`}
                    >
                      {btn.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
