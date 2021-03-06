import React from 'react';
import Description from '../../components/Description/Description';
import Track from '../../components/Track/Track';
import Footer from '../../components/Footer/Footer';
import './Home.css';


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous"></link>
        <Track className="track" track={this.props.track} main={this.props.main} />
        <Description track={this.props.track}/>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default Home;