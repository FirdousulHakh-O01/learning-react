import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import useResList from "../Utils/useResList";

const Body = () => {
  const [resList, setResList] = useState();
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useResList(setResList, setFilteredResList);

  if (filteredResList.length === 0) return <ShimmerUI />;

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          style={{ width: "250px", height: "10px", padding: "10px" }}
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          style={{ height: "25px", marginLeft: "10px" }}
          onClick={() => {
            const filtered = resList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            if (filtered.length !== 0) {
              setFilteredResList(filtered);
            } else {
              alert("No restaurants!");
              setFilteredResList(resList);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((res) => (
          <Link to={"/rest/" + res.info.id} key={res.info.id}>
            <RestaurantCard resDetails={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
