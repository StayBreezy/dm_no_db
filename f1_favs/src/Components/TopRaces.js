import React, {Component} from 'react';


export default class TopRaces extends Component {
    constructor(props){
        super(props);
        this.state = {
            topRaces: []
        }
    }

    render() {
        return (
            <div>
                {this.state.topRaces.map(e =>{
                    return (
                        <div>
                            <p>Race Name</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
