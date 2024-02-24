import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resMenuAPI } from "./constants";
const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resID } = useParams();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(resMenuAPI + resID);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
