import React from 'react';
import './Weekends.css';

const Weekends = () => {
  const weekendsData = [
    {
      h2: "Full Stack Development",
      parallelogram: "/Frame 1597880406.png",
      cards: [
        { img: "/python.png", p: "PYTHON FULL STACK DEVELOPMENT" },
        { img: "/java.png", p: "Java Full Stack Development" },
        { img: "/mern.png", p: "Mern FullStack Development" },
      ],
      button: "Register"
    }
  ];
  return (
    <div id="Weekends">
      {weekendsData.map((section, index) => (
        <div id="eachRow" key={index}>
          <h2 className="h2">{section.h2}</h2>
          <img className="parallelogram" src={section.parallelogram} alt="Parallelogram" />
          <div className="images-wrapper">
            {section.cards.map((card, cardIndex) => (
              <div id="eachCard" key={cardIndex}>
                <img className="image" src={card.img} alt={card.p} />
                <p>{card.p}</p>
                <button className="button">{section.button}</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Weekends;
