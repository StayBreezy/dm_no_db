import React, { Component} from 'react';


export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: 0
        }
    }

    handleChange = (val) => {
        this.setState({userInput: +val})
    }

    handleClick = () => {
        this.props.changeYear(this.state.userInput);
        this.props.changeYear(this.state.userInput)
    }

    render() {
        console.log(this.state.userInput)
        return (
            <div className="search-bar">
                <p>Change Year Here:</p>
                <input type="text" onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={() => this.handleClick()}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="13" height="13" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg></button>
            </div>
        )
    }
}
