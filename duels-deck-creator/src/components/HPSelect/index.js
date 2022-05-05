import React from "react";

const HPSelect = (props) => {
  const { onClose, currentHero, setCurrentHero } = props;


  return (
    <div className="heroWrapper">
      <div onClick={onClose} className="heroSelect">
          <h1>hello</h1>
      </div>
    </div>
  );
};
export default HPSelect;
