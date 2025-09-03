import React from "react";
import { IoMdTime } from "react-icons/io";

const LatestTrips = ({ cardInfo }) => {
  const { title, time, quantity, price } = cardInfo;
  return (
    <div className="flex flex-col items-center gap-y-3 px-10 py-4 lg:col-span-2 md:col-span-3 col-span-6 bg-background rounded-xl hover:-translate-y-1 transition-transform">
      <div className="font-semibold text-lg">{title}</div>
      <div className="flex items-center gap-x-3">
        <IoMdTime className="text-2xl" />
        <div className="">{time} heures</div>
      </div>
      <div className="">{quantity}</div>
      <div className="">prix: ${price}</div>
      <button className="my-button hover:bg-my-green hover:text-white transition-colors border border-my-green">
        Réservez ce voyage
      </button>
    </div>
  );
};

export default LatestTrips;
