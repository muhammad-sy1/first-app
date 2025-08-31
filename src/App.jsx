// import { useState } from 'react'
import "./App.css";
import Navbar from "./my-components/Navbar";

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
            <div className="flex flex-col justify-center items-center gap-y-5 h-full">
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
      </div>
    </>
  );
}

export default App;
