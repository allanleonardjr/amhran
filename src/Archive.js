import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
//import './Archive.css';

class Archive extends Component {
  render() {
    return (
        <div className="App">
        <h1>Archive</h1>
        <CardList tracks={this.props.tracks}></CardList>
      </div>
    );
  }
}

export default Archive;