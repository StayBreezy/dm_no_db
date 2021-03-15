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
      topRaces: [],
      year: 2020
    }
  }

  componentDidMount(){
    this.getSeason()
    this.getFavorites()
  }

  addToFavorites = (race) => {
    let editedSeason = []
    for (let i = 0; i < this.state.season.length; i++){
      if (race === this.state.season[i]){
        editedSeason = this.state.season;
        editedSeason.splice(i, 1)
        this.setState({season: editedSeason})
      }
    }
    axios.post('/api/favorites', race)
    .then(res => this.getFavorites())
    .catch(err => console.log(err))
  }

  getSeason = () => {
    axios.get(`/api/get-season/${this.state.year}`,)
    .then(res =>{
      this.setState({season: res.data})
    })
    .catch(err => console.log(err))
  }

  changeYear = (val) => {
    this.setState({year: val})
    this.getSeason()
  }

  getFavorites = () => {
    axios.get('/api/favorites')
    .then(res =>{
      this.setState({topRaces: res.data})
    })
    .catch(err => console.log(err))
  }

  handleDeleteClick = (id, race) => {
    axios.delete(`/api/favorites/${id}`, race)
    .then(res => this.getFavorites())
    .catch(err => console.log(err))
}



  render() {
    console.log(this.state.year)
    return(
      <div>
        <header><h1>Pick Your Top 3 Races From any F1 Season</h1></header>
        <SearchBar changeYear={this.changeYear}/>
        <div className="body-container">
          <div className="season-container">
        <Season season={this.state.season} addFn={this.addToFavorites}/>
          </div>
          <div className="top-races">
        <TopRaces topRaces={this.state.topRaces} getFavorites={this.getFavorites} delete={this.handleDeleteClick}/>
          </div>
        </div>

      </div>
    )
  }
}
