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
          <div className="grid grid-template-areas-1">
            <div className="grid1">grid1</div>
            <div className="grid2">grid2</div>
            <div className="grid3">grid3</div>
            <div className="grid4">grid4</div>
            <div className="grid5">grid5</div>
            <div className="grid6">grid6</div>
          </div>
        </div>
        <Construction />
        <Footer />
      </div>
    );
  }
}