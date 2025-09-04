import { useTranslation } from "react-i18next";
import LatestTrips from "./LatestTrips";

export default function TripsSection() {
  const { t } = useTranslation();

  return (
    <>
      <div className="sec-title py-10">{t("trips.latest")}</div>
      <div className="bg-gradient-to-r from-my-black to-my-green py-10">
        <div className="container lg:px-20 md:px-10 sm:px-5 px-2">
          <div className="flex flex-col gap-y-10">
            <div className="grid grid-cols-6 gap-5 ">
              <LatestTrips
                cardInfo={{
                  title: t("trips.trip1.title"),
                  time: t("trips.trip1.time"),
                  quantity: t("trips.trip1.quantity", { count: 1 }),
                  price: t("trips.trip1.price"),
                }}
              />
              <LatestTrips
                cardInfo={{
                  title: t("trips.trip2.title"),
                  time: t("trips.trip2.time"),
                  quantity: t("trips.trip2.quantity", { count: 2 }),
                  price: t("trips.trip2.price"),
                }}
              />
              <LatestTrips
                cardInfo={{
                  title: t("trips.trip3.title"),
                  time: t("trips.trip3.time"),
                  quantity: t("trips.trip3.quantity", { count: 3 }),
                  price: t("trips.trip3.price"),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
