import { Link, useSearchParams } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage, setCurrentStage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (currentStage === 1)
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          🌌 Hello, Avenger {searchParams.get("t").toLocaleUpperCase()}! 🌟{" "}
          <br />
          My CSE Galaxy needs YOU for a universe-altering photoshoot mission!
          📸✨
        </p>

        <button
          className="neo-brutalism-white neo-btn"
          onClick={() => setCurrentStage(2)}
        >
          Unlock the Saga 🔓
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </button>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          ANY GUESSES WHO HAS THE POWER TO RESCUE IT.....?
          <br />
          IT'S YOU🫵!!
        </p>

        <button
          className="neo-brutalism-white neo-btn"
          onClick={() => setCurrentStage(3)}
        >
          Explore Your Powers 🔥
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </button>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          🌅 Gear up, heroes, and converge on this cosmic rendezvous. Let's
          weave unforgettable tales together,
          <br />
          Date: 16th March, 8AM onwards, E-Learning Center
        </p>

        <button
          className="neo-brutalism-white neo-btn"
          onClick={() => setCurrentStage(4)}
        >
          Access the Hall of Fame 🏆
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </button>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          WELL, THIS COULD BE OUR LAST COMRADERIE🤝,
          <br />
          So
          <br />
          Avengers Assemble
          <br />
          Regards
          <br />
          Gyana Ranjan Panda
        </p>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
