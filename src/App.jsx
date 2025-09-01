// import { useState } from 'react'
import "./App.css";
import Navbar from "./my-components/Navbar";
import { FaRegCircle } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="h-[600px] w-full ">
          <img
            src="/banner.png"
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full bg-white/60 absolute inset-0">
            <div className="container h-full">
              <div className="flex flex-col justify-center items-center gap-y-5 h-full text-center">
                <div className="text-my-green font-bold text-4xl">
                  Voyagez intelligemment et économisez davantage
                </div>
                <div className="to-my-black font-medium text-2xl">
                  Trouvez des chauffeurs de confiance et profitez de voyages
                  économiques.
                </div>
              </div>
            </div>
          </div>
          <div className="container relative -top-10 w-full">
            <div className=" bg-white rounded-xl shadow-xl px-5 py-3 flex justify-between items-center">
              <div className="flex items-center gap-x-10">
                <div className="flex items-center gap-x-2">
                  <FaRegCircle />
                  <Select className="">
                    <SelectTrigger className="text-black! border-none shadow-none focus-visible:ring-0 hover:bg-gray-100">
                      <SelectValue placeholder="Plauen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-blue-800 text-xl">
                  <GoArrowSwitch />
                </div>
                <div className="flex items-center gap-x-2">
                  <FaRegCircle />
                  <Select className="">
                    <SelectTrigger className="text-black! border-none shadow-none focus-visible:ring-0 hover:bg-gray-100">
                      <SelectValue placeholder="Plauen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="">|</div>
                <div className="flex items-center">
                  <Select className="">
                    <SelectTrigger className="text-black! border-none shadow-none focus-visible:ring-0 hover:bg-gray-100">
                      <SelectValue placeholder="Today" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Today">Today</SelectItem>
                      <SelectItem value="Tomorrow">Tomorrow</SelectItem>
                      <SelectItem value="After Tomorrow">After Tomorrow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="">|</div>
                <div className="flex items-center gap-x-2">
                  <FaRegUser />
                  <Select className="">
                    <SelectTrigger className="text-black! border-none shadow-none focus-visible:ring-0 hover:bg-gray-100">
                      <SelectValue placeholder="2 Passagères" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1 Passagères">1 Passagères</SelectItem>
                      <SelectItem value="2 Passagères">2 Passagères</SelectItem>
                      <SelectItem value="3 Passagères">3 Passagères</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <button className="my-button hover:bg-cyan-800 bg-cyan-950 text-white">
                Recherche
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
