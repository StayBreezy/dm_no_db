import React, {Component} from 'react';
import axios from 'axios';


export default class TopRaces extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: ''
        }

    }


    render() {
        console.log(this.props.topRaces)
        return (
            <div>
                {this.props.topRaces.map(e =>{
                    return (
                        <div>
                            <p>{e.raceRound}</p>
                            <p>{e.raceName}</p>
                            <p>{e.location}</p>
                            <p>{e.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
