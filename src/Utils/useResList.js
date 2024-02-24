import { useEffect } from "react";
import { resListAPI } from "./constants";

const useResList = (setResList, setFilteredResList) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resListAPI);
    const json = await data.json();
    setResList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
};
export default useResList;
