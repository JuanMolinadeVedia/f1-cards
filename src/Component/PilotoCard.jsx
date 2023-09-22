// PilotoCard.jsx
import React from "react";
import { Stat } from "./Stat.jsx";
import { COUNTRIES } from "./Countries.jsx";
import { TEAM_LOGOS } from "./TeamLogos.jsx";
const PilotoCard = ({ driver }) => {
  return (
    <div
      className="card"
      style={{
        background: COUNTRIES[driver.nationality].backgroundColor,
        color: COUNTRIES[driver.nationality].color,
      }}
    >
      <div className="content">
        <h2>{`${driver.ranking} - ${driver.name} ${driver.surname}`}</h2>
        <p>Current</p>
        <div className="current">
          <Stat
            title={"Points:"}
            value={driver.points}
            direction={"-direction"}
          />
          <Stat
            title={"Last race:"}
            value={driver.lastRace}
            direction={"-direction"}
          />
        </div>
        <p>Historic</p>
        <div className="historic">
          <Stat title={"Wins"} value={driver.wins} />
          <Stat title={"Poles"} value={driver.poles} />
          <Stat title={"Best"} value={driver.bestPosition} />
        </div>
      </div>
      <div className="imgs">
        <img
          src={COUNTRIES[driver.nationality].flag}
          alt={driver.nationality}
        />
        <img src={TEAM_LOGOS[driver.team]} alt={driver.team} />
      </div>
      <Stat
        title={"Team points:"}
        value={driver.teamPoints}
        direction={"-direction"}
      />
    </div>
  );
};

export default PilotoCard;
