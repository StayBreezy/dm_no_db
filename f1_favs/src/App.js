import React, { Component} from 'react';
import SearchBar from './Components/SearchBar';
import Season from './Components/Season';
import TopRaces from './Components/TopRaces';
import axios from 'axios';
import './App.css';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      season: [],
      year: 0
    }
  }

  componentDidMount(){
    axios.get('/api/get-season')
    .then(res =>{
      this.setState({season: res.data})
    })
    .catch(err => console.log(err))
  }

  addToFavorites = () => {
    
  }



  render() {
    console.log(this.state.season)
    return(
      <div>
        <header><h1>Pick Your Top 3 Races From 2020 F1 Season</h1></header>
        <SearchBar />
        <div className="body-container">
          <div className="season-container">
        <Season season={this.state.season}/>
          </div>
          <div className="top-races">
        <TopRaces />
          </div>
        </div>

      </div>
    )
  }
}
