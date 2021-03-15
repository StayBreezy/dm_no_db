import React, { Component } from "react";
import axios from "axios";

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
            <div className="topRace">
              <button
                className="deleteBtn"
                onClick={() => this.props.delete(e.id)}
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
          );
        })}
      </div>
    );
  }
}
