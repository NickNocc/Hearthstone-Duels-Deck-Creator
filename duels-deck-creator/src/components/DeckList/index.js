import React from "react";

const DeckList = ({ deckList, setDeckList }) => {
  return (
    <>
      {deckList
        ? deckList.map((card, i) => (
            <span key={i}
              onClick={(e) => {
                console.log(card);
                setDeckList((oldState) =>
                  oldState.filter((cardRemover) => {
                    return cardRemover !== card;
                  })
                );
              }}
            >
              <img
                src={card.cropImage}
                key={i}
                alt={card.name}
                value={card.id}
                className="singleCard"
              />
            </span>
          ))
        : null}
    </>
  );
};

export default DeckList;