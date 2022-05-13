import React from "react";

const DeckList = ({ deckList, setDeckList }) => {
  return (
    <div className="deckListMain">
      {deckList
        ? deckList.map((card, i) => (
            <span
              key={i}
              onClick={(e) => {
                console.log(card);
                setDeckList((oldState) =>
                  // Removes card that is clicked on
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
    </div>
  );
};

export default DeckList;
