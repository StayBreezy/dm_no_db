import React from 'react';
import Race from './Race'

const Season = (props) => {
    const {season, addFn, year} = props;


    let handleClick = (val) => {
        addFn(val)
    }

    return (
        <div>
            <h3>Year: {year}</h3>
            <div className="season">
            {season.map(e =>{
                return (
                    <Race e={e} handleClick={handleClick}/>
                    )
                })}
                </div>
        </div>
    )
}

export default Season;
