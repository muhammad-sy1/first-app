import { useTranslation } from "react-i18next";
import LatestTrips from "./LatestTrips";
import { useEffect, useState } from "react";
import getLatestTripsAndSocialLinks from "../services/latestTrips-socialLinks";
import dayjs from "../utils/dayjsConfig";

export default function TripsSection() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language; // "ar" أو "en"
  const [tripsInfo, setTripsInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getLatestTripsAndSocialLinks();
      setTripsInfo(data.data.trips || []);
      console.log(data.data.trips);
    })();
  }, []);

  return (
    <>
      <div className="sec-title py-10">{t("trips.latest")}</div>
      <div className="bg-gradient-to-r from-my-black to-my-green py-10">
        <div className="container lg:px-20 md:px-10 sm:px-5 px-2">
          <div className="flex flex-col gap-y-10">
            <div className="grid grid-cols-6 gap-5 ">
              {tripsInfo.map((item) => (
                <div className="contents" key={item.id}>
                  <LatestTrips
                    cardInfo={{
                      title: `${item.from_location_text} to ${item.to_location_text}`,
                      date: `${dayjs(item.travel_datetime)
                        .locale(lang)
                        .toNow()}`,
                      quantity: `${item.seats} ${t("trips.quantity")}`,
                      price: `${t("trips.price")} ${item.price} $`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
