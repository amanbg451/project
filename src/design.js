import React from "react";
import './style.css';


const FigmaBox = () => {
  return (
    <div className="big-box">
      <div className="red-box">
        <div className="corner-box red top-left" />
        <div className="corner-box black top-right" />
        <div className="corner-box red bottom-left" />
        <div className="corner-box black bottom-right" />
      </div>
    </div>
  );
};

export default FigmaBox;
