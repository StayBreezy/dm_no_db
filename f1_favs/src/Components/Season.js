import React, { Component } from 'react';

const Season = (props) => {
    const {season, addFn} = props;


    handleClick = () =>{
        // add to favs fn
    }

    return (
        <div className="season">
            {season.map(e =>{
                return (
                    <div onClick={() =>handleClick()}>
                        <p>Round {e.raceRound}</p>
                        <p>{e.raceName}</p>
                        <p>{e.location}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Season;
