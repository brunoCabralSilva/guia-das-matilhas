import React from 'react';
import '../css/rituals.css';
import Nav from '../components/Nav';
import Construction from '../components/Construction';
import Footer from '../components/Footer';

export default class Rituals extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="darkness"></div>
        <div className="main-nav">
          <Nav />
          <Construction />
          <Footer />
        </div>
      </div>
    );
  }
}