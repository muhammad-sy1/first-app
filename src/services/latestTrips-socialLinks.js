import axios from "axios";

export default async function getLatestTripsAndSocialLinks() {
  const response = await axios.get(
    "https://izikiz-back.bayanmasters.com/api/v1/app/home?with_info=1"
  );
  return response.data;
}
