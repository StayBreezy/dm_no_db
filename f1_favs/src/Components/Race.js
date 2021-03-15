import React from 'react';

const Race = (props) => {
    const {e, handleClick} = props;
        return (
                    <div className='race' onClick={() => handleClick(e)}>
                        {/* {console.log(e)} */}
                        <p>Round {e.raceRound}</p>
                        <p>{e.raceName}</p>
                        <p>{e.location}</p>
                    </div>
        )
}

export default Race;
