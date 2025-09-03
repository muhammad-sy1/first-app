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
import LatestTrips from "./my-components/LatestTrips";
import ServicesCards from "./my-components/ServicesCards";
import Footer from "./my-components/Footer";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="h-[600px]">
          <img
            src="/banner.png"
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full bg-white/60 dark:bg-black/60  absolute inset-0">
            <div className="container lg:px-20 md:px-10 sm:px-5 px-2 h-full ">
              <div className="flex flex-col justify-center items-center gap-y-5 h-full text-center">
                <div className="text-my-green font-bold sm:text-4xl text-2xl ">
                  Voyagez intelligemment et économisez davantage
                </div>
                <div className="text-my-black dark:text-my-white font-medium sm:text-2xl text-lg ">
                  Trouvez des chauffeurs de confiance et profitez de voyages
                  économiques.
                </div>
              </div>
            </div>
          </div>
          <div className="container xl:px-40 lg:px-20 md:px-10 sm:px-5 px-2 relative -top-10">
            <div className=" flex lg:flex-row flex-col justify-between items-center gap-y-5 bg-background rounded-xl shadow-xl dark:shadow-my-black/20 px-5 py-3">
              <div className="flex lg:flex-row flex-col items-center gap-y-3 gap-x-10">
                <div className="flex items-center gap-x-5">
                  <div className="flex items-center gap-x-2">
                    <FaRegCircle className="size-5 sm:flex hidden" />
                    <Select className="">
                      <SelectTrigger className="hover:bg-gray-100">
                        <SelectValue placeholder="Plauen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="text-blue-800 text-xl hover:bg-foreground transition-colors rounded-sm p-2">
                    <GoArrowSwitch />
                  </div>
                  <div className="flex items-center gap-x-2">
                    <FaRegCircle className="size-5 sm:flex hidden" />
                    <Select className="">
                      <SelectTrigger className="hover:bg-gray-100">
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
                <div className="flex items-center gap-x-5">
                  <div className="lg:flex hidden">|</div>
                  <div className="flex items-center gap-x-2">
                    <LuCalendarDays className="size-5 sm:flex hidden" />
                    <Select className="">
                      <SelectTrigger className="hover:bg-gray-100">
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
                    <FaRegUser className="size-5 sm:flex hidden" />
                    <Select className="">
                      <SelectTrigger className="hover:bg-gray-100">
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
              <button className="my-button hover:bg-my-black/90 bg-my-black text-white transition-colors">
                Recherche
              </button>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="container lg:px-20 md:px-10 sm:px-5 px-2 lg:pt-20 pt-40 pb-10">
          <div className="flex flex-col gap-y-10">
            <div className="sec-title">Our Services</div>
            <div className="grid grid-cols-6 gap-10 gap-y-10">
              <ServicesCards
                serviceInfo={{
                  serviceIcon: <GiMoneyStack />,
                  serviceTitle: "Choisissez parmi des voyages à petit prix",
                  serviceBody:
                    "Nous vérifions les avis et les profils afin que vous sachiez avec qui vous voyagez et que vous réserviez facilement votre voyage sur notre site.",
                }}
              />
              <ServicesCards
                serviceInfo={{
                  serviceIcon: <AiTwotoneSecurityScan />,
                  serviceTitle:
                    "Faites confiance à la personne avec qui vous voyagez",
                  serviceBody:
                    "Nous vérifions les avis et les profils afin que vous sachiez avec qui vous voyagez et que vous réserviez facilement votre voyage sur notre site.",
                }}
              />
              <ServicesCards
                serviceInfo={{
                  serviceIcon: <ImPower />,
                  serviceTitle: "Réservez rapidement et facilement",
                  serviceBody:
                    "Nous vérifions les avis et les profils afin que vous sachiez avec qui vous voyagez et que vous réserviez facilement votre voyage sur notre site.",
                }}
              />
            </div>
          </div>
        </div>
        <div className="sec-title py-10">Derniers voyages</div>
        <div className="bg-gradient-to-r from-my-black to-my-green py-10">
          <div className="container lg:px-20 md:px-10 sm:px-5 px-2">
            <div className="flex flex-col gap-y-10">
              <div className="grid grid-cols-6 gap-5 ">
                <LatestTrips
                  cardInfo={{
                    title: "Munich to Plauen ",
                    time: "4",
                    quantity: "Un siège",
                    price: "10",
                  }}
                />
                <LatestTrips
                  cardInfo={{
                    title: "Munich to Plauen ",
                    time: "4",
                    quantity: "Un siège",
                    price: "10",
                  }}
                />
                <LatestTrips
                  cardInfo={{
                    title: "Munich to Plauen ",
                    time: "4",
                    quantity: "Un siège",
                    price: "10",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container lg:px-20 md:px-10 sm:px-5 px-2 py-10">
          <div className="sec-title py-10">Contactez-nous</div>
          <form action="" className="flex flex-col items-center gap-y-4 ">
            <div className="flex flex-col gap-y-3 items-center md:w-96 w-full border rounded px-4 py-3">
              <input
                className="w-full"
                type="text"
                placeholder="Nom et prénom"
              />
              <input className="w-full" type="email" placeholder="e-mail" />
              <input className="w-full" type="tel" placeholder="Téléphone" />
              <textarea
                placeholder="Message "
                className="resize-none h-32 w-full"
              ></textarea>
              <button className="my-button border px-10! hover:bg-my-black hover:text-white transition-colors">
                soumettre
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
