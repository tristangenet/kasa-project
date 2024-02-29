import arrowBack from '../assets/arrow_back.png'
import "../styles/collapse.scss";
import { useState } from "react";

const Collapse = ({ title, txt }) => {
  const [display, setDisplay] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setDisplay(!display);
    setIsActive(!isActive);
  }

  return (
    <div className="collapse-container">
      <div className="collapse" onClick={handleClick}>
        <h2 className="collapse__title">{title}</h2>
        <img
          className={`collapse__arrow ${isActive || 'down'}`}
          src={arrowBack}
          alt="Arrow"
        />
      </div>
      <div
        className={
          isActive
            ? "collapseContent collapseContent--active unCollapseContent"
            : "collapseContent"
        }
      >
        {txt}
      </div>
    </div>
  );
};

export default Collapse;
