import React from 'react';

const TRace = (props) => {
const {handleClick, handleChange, deleteFn, e, iconX} = props;

    return (
        <div className="topRace">
              <button
                className="deleteBtn"
                onClick={() => deleteFn(e.id)}
                >
                {iconX}
              </button>
              <p>
                Round {e.raceRound} {e.raceName}
              </p>
              <p>Location: {e.location}</p>
              <p>Three Word Race Review: {e.description}</p>
              {/* <p>{e.id}</p> */}
              {console.log(e.id)}
              <input onChange={(e) => this.handleChange(e.target.value)} />
              <button onClick={() => this.handleClick(e)}>Add TWRR</button>
            </div>
)
}
export default TRace;
