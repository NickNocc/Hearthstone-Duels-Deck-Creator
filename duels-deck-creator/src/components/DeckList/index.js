import React from "react";

const DeckList = ({ deckList, setDeckList }) => {
  return (
    <>
      {deckList
        ? deckList.map((card, i) => (
            <span
              onClick={(e) => {
                
                console.log(card);
                setDeckList((oldState) =>
                  oldState.filter((cardRemover) => {
                    return cardRemover !== card;
                  })
                );
                
                
              }}
            >
              <img src={card.cropImage} key={i} alt={card.name} value={card.id} />
            </span>
          ))
        : null}
    </>
  );
};

export default DeckList;
