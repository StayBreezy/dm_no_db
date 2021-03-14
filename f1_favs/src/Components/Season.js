import React from 'react';

const Season = (props) => {
    const {season, addFn} = props;


    let handleClick = (val) => {
        addFn(val)
    }

    return (
        <div className="season">
            {season.map(e =>{
                return (
                    <div className='race' onClick={() => handleClick(e)}>
                        {/* {console.log(e)} */}
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
