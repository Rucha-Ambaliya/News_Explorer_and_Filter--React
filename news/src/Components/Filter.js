import React from "react";
import { S_URL, E_URL } from "../data";
import "./Filter.css";

const Filter = ({ categories, fetchData, setUrl }) => {
  
  const categoryHandler = (categoryTitle) => {
    if (categoryTitle !== "All") {
      setUrl(`${S_URL}&category=${categoryTitle}${E_URL}`);
    } else {
      setUrl(`${S_URL}${E_URL}`);
    }
    fetchData();
  };

  return (
    <div className="filter-container">
      {categories.map((category) => (
        <button
          className="filter-button"
          key={category.id}
          onClick={() => categoryHandler(category.title)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
