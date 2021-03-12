import React, { Component} from 'react';


export default class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: ''
        }
    }

    handleChange = (val) => {
        this.setState({userinput: val})
    }
    render() {
        return (
            <input onChange={(e) => this.handleChange(e.target.value)} type="dropdown" />
        )
    }
}
