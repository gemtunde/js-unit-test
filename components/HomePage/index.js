import React, { useState } from "react";

const HomePage = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <h2>Home Now</h2>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random text</label>
        <input id="randomText" />
      </div>
      <div>
        <label htmlFor="specificText">Enter Specific text</label>
        <input id="specificText" />
      </div>
      <div>
        <input id="specificText" placeholder="Search..." />
      </div>
      <div>
        <input value="Camry 08" />
      </div>
      <div>
        {showText && <span> This is Show Text</span>}
        <br />
        <button
          onClick={() =>
            setTimeout(() => {
              setShowText(!showText);
            }, 1000)
          }
        >
          Show Text
        </button>
      </div>
    </>
  );
};

export default HomePage;
