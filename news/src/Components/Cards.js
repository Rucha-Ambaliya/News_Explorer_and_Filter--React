import React from 'react';
import Card from "./Card.js";
import "./Cards.css";

const Cards = ({articles}) => {
  return (
    <div className="cards-container">
      {articles.length === 0 ? (
        <p className='cards-msg'>No data available at the moment. Please try again later.</p>
      ) : (
        articles.map((article, index) => <Card article={article} key={index} />)
      )}
    </div>
  );
};

export default Cards;
