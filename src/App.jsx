// import { useState } from 'react'
import "./App.css";
import Navbar from "./my-components/Navbar";
import { FaRegCircle } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { ImPower } from "react-icons/im";
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
          <div className="container relative -top-10 w-full flex justify-center items-center">
            <div className=" flex lg:flex-row flex-col justify-between items-center gap-y-5 bg-white rounded-xl shadow-xl px-5 py-3">
              <div className="flex lg:flex-row flex-col items-center gap-y-3 gap-x-10">
                <div className="flex items-center gap-x-10">
                  <div className="flex items-center gap-x-2">
                    <FaRegCircle className="size-5" />
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
                  <div className="text-blue-800 text-xl hover:bg-gray-100 rounded-sm p-2">
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
                </div>
                <div className="flex items-center gap-x-10">
                  <div className="lg:flex hidden">|</div>
                  <div className="flex items-center gap-x-2">
                    <LuCalendarDays className="size-5" />
                    <Select className="">
                      <SelectTrigger className="text-black! border-none shadow-none focus-visible:ring-0 hover:bg-gray-100">
                        <SelectValue placeholder="Today" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Today">Today</SelectItem>
                        <SelectItem value="Tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="After Tomorrow">
                          After Tomorrow
                        </SelectItem>
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
                        <SelectItem value="1 Passagères">
                          1 Passagères
                        </SelectItem>
                        <SelectItem value="2 Passagères">
                          2 Passagères
                        </SelectItem>
                        <SelectItem value="3 Passagères">
                          3 Passagères
                        </SelectItem>
                        <SelectItem value="4 Passagères">
                          4 Passagères
                        </SelectItem>
                        <SelectItem value="5 Passagères">
                          5 Passagères
                        </SelectItem>
                        <SelectItem value="6 Passagères">
                          6 Passagères
                        </SelectItem>
                        <SelectItem value="7 Passagères">
                          7 Passagères
                        </SelectItem>
                        <SelectItem value="8 Passagères">
                          8 Passagères
                        </SelectItem>
                        <SelectItem value="9 Passagères">
                          9 Passagères
                        </SelectItem>
                        <SelectItem value="10 Passagères">
                          10 Passagères
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <button className="my-button hover:bg-cyan-800 bg-cyan-950 text-white">
                Recherche
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container lg:px-40 lg:pt-20 pt-40 pb-20">
        <div className="flex flex-col gap-y-10">
          <div className="sec-title">Our Services</div>
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-3 w-96">
              <GiMoneyStack className="text-4xl" />
              <div className="font-semibold text-xl">
                Choisissez parmi des voyages à petit prix
              </div>
              <div className="text-lg">
                Nous vérifions les avis et les profils afin que vous sachiez
                avec qui vous voyagez et que vous réserviez facilement votre
                voyage sur notre site.
              </div>
            </div>
            <div className="flex flex-col gap-y-3 w-96">
              <AiTwotoneSecurityScan className="text-4xl" />
              <div className="font-semibold text-xl">
                Faites confiance à la personne avec qui vous voyagez
              </div>
              <div className="text-lg">
                Nous vérifions les avis et les profils afin que vous sachiez
                avec qui vous voyagez et que vous réserviez facilement votre
                voyage sur notre site.
              </div>
            </div>
            <div className="flex flex-col gap-y-3 w-96">
              <ImPower className="text-4xl" />
              <div className="font-semibold text-xl">
                Réservez rapidement et facilement
              </div>
              <div className="text-lg">
                Nous vérifions les avis et les profils afin que vous sachiez
                avec qui vous voyagez et que vous réserviez facilement votre
                voyage sur notre site.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
