import React, { useEffect } from "react";

const Card = ({ imageDeck, imageCard, id }) => {
  useEffect(() => {
    if (imageCard) {
      reAnimate(id);
    }
  }, [id, imageCard]);
  const reAnimate = (elementID) => {
    var element = document.getElementById(elementID);
    element.classList.remove("animate");
    void element.offsetWidth;
    element.classList.add("animate");
  };
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner" id={id}>
          <div className="flip-card-front">
            {imageCard && (
              <img src={imageCard} alt="Deck" className="imageDeck" />
            )}
          </div>
          <div className="flip-card-back">
            <img src={imageDeck} alt="Deck" className="imageDeck" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
