import React from 'react';
import Card from "./Card.js";
import "./Cards.css";

const Cards = ({articles}) => {
  return (
    <div className="cards-container">
      {articles.map((article, index) => (
        <Card article={article} key={index}/>
      ))}
    </div>
  );
};

export default Cards;
