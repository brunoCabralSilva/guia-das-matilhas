import React from 'react';
import Nav from '../components/Nav';
import Construction from '../components/Construction';
import Footer from '../components/Footer';

export default class GarouNordeste extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main">
        <div className="darkness"></div>
        <div className="main-nav">
          <Nav />
        </div>
        <Construction />
        <Footer />
      </div>
    );
  }
}