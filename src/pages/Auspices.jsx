import React from 'react';
import '../css/features.css';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import augurios from '../data/augurios.json';

export default class Auspices extends React.Component {
  render() {
    return (
      <section className="features">
        <div className=""></div>
        <div className="features-div">
          <div className="nav-features">
            <Nav />
          </div>
          <h1 className="title-page title-features">Augúrios</h1>
          <Carousel list={augurios} repository={'auspices'} />
          </div>
          <div className="footer-features">
          <Footer />
        </div>
      </section>
    );
  }
}