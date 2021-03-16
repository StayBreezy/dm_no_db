import React, { Component } from "react";
import axios from "axios";
import TRace from './TRace';

export default class TopRaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }

  handleChange = (val) => {
    this.setState({ userInput: val });
  };

  handleClick = (race) => {
    race.description = this.state.userInput;
    axios
      .put(`/api/favorites/${race.id}`, race)
      .then((res) => {
        this.setState({ userInput: "" });
      })
      .catch((err) => console.log(err));
  };

  deleteFn = (val) => this.props.delete(val)

  render() {
    let iconX = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-square-x"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M10 10l4 4m0 -4l-4 4" />
      </svg>
    );
    console.log(this.props.topRaces);
    console.log(`this is state.userinput ${this.state.userInput}`);
    return (
      <div>
        <h2>Top 3 Races</h2>
        {this.props.topRaces.map((e) => {
          return (
            <TRace e={e} iconX={iconX}topRaces={this.props.topRaces} getFavorites={this.props.getFavorites} deleteFn={this.deleteFn} handleClick={this.handleClick} handleChange={this.handleChange} />
          );
        })}
      </div>
    );
  }
}
